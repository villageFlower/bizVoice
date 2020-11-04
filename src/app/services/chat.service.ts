import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private fire: AngularFirestore,
    private toast: ToastController,
    private router: Router,
  ) { }

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  getMessages() {
    return this.fire.collection("chat/" + localStorage.getItem("roomId") + "/messages", ref => ref.orderBy("time", "asc")).valueChanges()
  }

  public joinQueue() {
    this.fire.collection("queue").doc(localStorage.getItem("email")).set({ time_in: new Date() })
  }

  public quitQueue() {
    return this.fire.collection("queue").doc(localStorage.getItem("email")).delete()
  }

  public checkQueue() {
    return this.fire.collection("queue", ref => ref.orderBy("time_in", "asc")).valueChanges({ idField: "id" })
  }

  public checkTech() {
    return this.fire.collection("tech", ref => ref.where("online", "==", true).where("ava", "==", true)).valueChanges({ idField: "id" }).subscribe(data => {
      let staffs = data;
      if (staffs.length != 0) {
        this.startChat(staffs[0].id)
      }
      {
        path: 'waitroom',
        loadChildren: () => import('./waitroom/waitroom.module').then( m => m.WaitroomPageModule)
      },
    })
  }

  public startChat(staff) {
    return this.fire.collection("chat").add({
      caller_id: localStorage.getItem("email"),
      staff: staff,
      time: new Date()
    }).then(docRef => {
      localStorage.setItem("roomId", docRef.id)
      this.fire.collection("chat").doc(docRef.id).collection("messages").add({
        reply: true,
        content: "Hi there, how can I help?",
        time: new Date()
      }).catch(error => {
        if (error) { this.presentToast("failed to connect, please try again later") }
      }).then(data => {
        this.fire.collection("tech").doc(staff).update({ ava: "false" }).then(data => { this.quitQueue().then(data => { this.router.navigate(["./chat"]) }) })
      })
    })
  }

  public endChat(staff) {
    return this.fire.collection("tech")
  }

  public sendMessage(content) {
    return this.fire.collection("chat/" + localStorage.getItem("roomId") + "/messages").add({
      reply: false,
      content: content,
      time: new Date()
    })
  }




}
