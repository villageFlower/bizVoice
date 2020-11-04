import { Component, OnInit } from '@angular/core';
import { QnaService } from '../services/qna.service';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../modals/my-modal/my-modal.page';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-qna-detail',
  templateUrl: './qna-detail.page.html',
  styleUrls: ['./qna-detail.page.scss'],
})
export class QnaDetailPage implements OnInit {

  dataReturned: any;
  qnas: any = [];
  id: any;
  qna:any ={};

  constructor(private qnaService : QnaService, public modalController: ModalController,private firestore: AngularFirestore) {
      qnaService.getAllUCQnA().subscribe((data) => {this.qnas = data;});
   }

  ngOnInit() {
    this.qnaService.getAllUCQnA();
    console.log((this.qnas))
  }

  async openModal(id) {
    this.qnaService.setqnaID(id);
    this.qnaService.getOneUCQnA(localStorage.getItem("qnaID")).subscribe(result =>{
      this.qna = result;
    })

    const modal = await this.modalController.create({
      component: MyModalPage,
      componentProps: {
        
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

}
