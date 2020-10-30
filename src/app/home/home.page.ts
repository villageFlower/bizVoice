import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private animationCtrl: AnimationController,
    private route: Router,
  ) {
  }

  ngOnInit() {
    this.animationCtrl.create()
    .addElement(document.querySelector('.zoom'))
    .duration(3000)
    .iterations(1)
    .keyframes([
      { offset: 0, opacity:'0'},
      { offset: 0.5, opacity:'1'},
      { offset: 1, opacity:'0'},
    ])
    .play()
    timer(3000).subscribe(()=>{
      this.route.navigate(['./login'])
    })
  }

}
