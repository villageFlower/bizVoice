import { Component, OnInit } from '@angular/core';
import { QnaService } from '../services/qna.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qna-detail',
  templateUrl: './qna-detail.page.html',
  styleUrls: ['./qna-detail.page.scss'],
})
export class QnaDetailPage implements OnInit {

  qnas: any = [];

  constructor(private qnaService : QnaService, private alertController: AlertController) {
      qnaService.getAllUCQnA().subscribe((data) => {this.qnas = data;});
   }

  ngOnInit() {
    this.qnaService.getAllUCQnA();
    console.log((this.qnas))
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Does it help?',
      message: '{{qna.question}}',
      buttons: ['OK']
    });

    await alert.present();
  }

}
