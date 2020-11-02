import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-forgetpw',
  templateUrl: './forgetpw.page.html',
  styleUrls: ['./forgetpw.page.scss'],
})
export class ForgetpwPage implements OnInit {

  email: string = '';

  constructor(
    private authService: AuthenticateService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  forgetPassword(){
    console.log(this.email);
    this.authService.resetPassword(this.email);
    this.toastController.create({
      message: 'Email sent successfully! Please follow the steps to reset your password!',
      duration: 5000,
      position: 'bottom'
    }).then(alert => alert.present());
  }

}
