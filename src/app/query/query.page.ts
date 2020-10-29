import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-query',
  templateUrl: './query.page.html',
  styleUrls: ['./query.page.scss'],
})
export class QueryPage implements OnInit {
  enter: any;

  constructor(private animate:AnimationController) {
  this.enter = this.animate.create()
  .addElement(document.querySelector('.enterWord'))
  .duration(1500)
  .iterations(Infinity)
  .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  .fromTo('opacity', '1', '0.2');

   }
   

  ngOnInit() {
    this.enter.play()
  }

}
