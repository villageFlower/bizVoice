import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { QnaService } from '../../services/qna.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {


  qnaId: any;
  qna: any = {};

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private qnaService: QnaService,
    private navCtrl: NavController,
    
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.qnaId = this.navParams.data.qnaID;
    this.qnaService.getOneUCQnA(this.qnaId).subscribe(result => {
      this.qna = result;
      });
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async closeAndGoWaitroom() {
    await this.modalController.dismiss();
    this.navCtrl.navigateForward('/waitroom');
  }

}