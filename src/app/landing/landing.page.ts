import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private toast: ToastController,
    private authService: AuthenticateService,
    private toastController: ToastController,
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

  forgetPassword(){
    this.authService.resetPassword(localStorage.getItem('email'));
    this.toastController.create({
      message: 'Email sent successfully! Please follow the steps to reset your password!',
      duration: 5000,
      position: 'bottom'
    }).then(alert => alert.present());
  }

}
