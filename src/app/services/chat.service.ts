import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private fire: AngularFirestore,
    private toast: ToastController,
  ) { }

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  getMessages(){
    return this.fire.collection("chat/" + localStorage.getItem("roomId") + "/messages", ref => ref.orderBy("time", "asc")).valueChanges()
  }

  public startChat(staff) {
    return this.fire.collection("chat").add({
      caller_id: localStorage.getItem("email"),
      staff: staff,
      time: new Date()
    }).then(docRef => {
      localStorage.setItem("roomId",docRef.id)
      this.fire.collection("chat").doc(docRef.id).collection("messages").add({
        reply: true,
        content: "Hi there, how can I help?",
        time: new Date()
      }).catch(error => {
        if (error) { this.presentToast("failed to connect, please try again later") }
      }).then(data => {
         this.fire.collection("tech").doc("staff").update({ava:"false"})
      })
    })
  }

  sendMessage(content){
    return this.fire.collection("chat/" + localStorage.getItem("roomId")+ "/messages").add({
      reply: false,
      content: content,
      time: new Date()
    })
  }




}
