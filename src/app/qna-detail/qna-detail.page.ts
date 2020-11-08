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
  cate:any;

  constructor(
    private qnaService : QnaService,
    public modalController: ModalController,
    private firestore: AngularFirestore
    ) {

   }

  ngOnInit() {
    this.cate=localStorage.getItem("qna")
    this.qnaService.getAllUCQnA(this.cate).subscribe(data => {
      this.qnas = data;
      console.log((this.qnas));
    })
  }

  async openModal(id) {
    this.qnaService.setqnaID(id);
    this.qnaService.getOneUCQnA(localStorage.getItem("qnaID")).subscribe(result =>{
      this.qna = result;
    })

    const modal = await this.modalController.create({
      component: MyModalPage,
      componentProps: {
        "qnaID": localStorage.getItem("qnaID"),
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
