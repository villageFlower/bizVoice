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
    private animate:AnimationController,

  ) { }

  ngOnInit() {
    this.animate.create()
    .addElement(document.querySelector('.chilun'))
    .duration(3000)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, opacity:'0.3'},
      { offset: 0.5, opacity:'1'},
      { offset: 1, opacity:'0.3'},
    ])
    .play()

    this.animate.create().addElement(document.querySelector('.selfHelp')).duration(1000).iterations(1).fromTo('transform', 'translateX(500px)', 'translateX(0px)').play();
    this.animate.create().addElement(document.querySelector('.password')).duration(1000).iterations(1).fromTo('transform', 'translateX(-500px)', 'translateX(0px)').play()
  }

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  resetPassword(){
    this.authService.resetPassword(localStorage.getItem('email'));
    this.toastController.create({
      message: 'Email sent successfully! Please follow the steps to reset your password!',
      duration: 5000,
      position: 'bottom'
    }).then(alert => alert.present());
  }

}
