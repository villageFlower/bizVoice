import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-query',
  templateUrl: './query.page.html',
  styleUrls: ['./query.page.scss'],
})
export class QueryPage implements OnInit {



  constructor(
    private animationCtrl: AnimationController,
    private router: Router
  ) {
  }


  ngOnInit() {
    this.animationCtrl.create()
      .addElement(document.querySelector('.enterWord'))
      .addElement(document.querySelector('.acc'))
      .duration(1000)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translateX(-500px)', opacity: "0.2" },
        { offset: 1, transform: 'translateX(0px))', opacity: "1" }
      ])
      .play();

    var select = document.querySelector('.select')
    var fadeElement = select.querySelectorAll('.fade')

    this.animationCtrl.create()
      .addElement(fadeElement)
      .iterations(1)
      .duration(2500)
      .keyframes([
        { offset: 0, opacity: "0" },
        { offset: 0.5, opacity: "0" },
        { offset: 1, opacity: "1" }
      ])
      .play()
  }
  clickGo(cate) {
    localStorage.setItem("qna",cate);
    this.router.navigate(['../qna-detail']);

  }
}
