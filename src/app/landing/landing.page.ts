import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private toast: ToastController,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
  }

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
