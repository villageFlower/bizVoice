import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Phaser from 'phaser';


class PrizeScene extends Phaser.Scene {

  wheel
  canSpin = false;
  prize;
  prizeText;
  slices = 8;
  slicePrizes = ['IPHONE20!!!!!!!', '50 Sintel point', '500 Sintel point', 'BAD LUCK!!!', '200 Sintel point', '100 Sintel point', '150 Sintel point', 'BAD LUCK!!!'];
  constructor(
    config,
    ) {
    super(config);
  }


  preload() {
    this.load.setPath('assets/');
    this.load.image('wheel', 'wheel.png');
    this.load.image('pin', 'pin.png');
  }


  create() {
    let point = window.innerWidth / 2;
    this.wheel = this.add.image(point, point, 'wheel');
    this.wheel.setOrigin(0.5);
    this.wheel.setScale(0.7)
    let pin = this.add.image(point, point, 'pin');
    pin.setOrigin(0.5);
    pin.setScale(0.5)
    this.prizeText = this.add.text(this.cameras.main.centerX, 480, '');
    this.prizeText.setOrigin(0.5);
    this.prizeText.align = 'center';
    this.canSpin = true;
    this.input.on('pointerdown', this.spin, this);

  }


  spin() {
    if (this.canSpin) {
      this.prizeText.text = '';
      let rounds = Phaser.Math.RND.between(2, 4);
      let degrees = Phaser.Math.RND.between(0, 360);
      this.prize = this.slices - 1 - Math.floor(degrees / (360 / this.slices));

      this.canSpin = false;

      this.tweens.add({
        targets: this.wheel,
        ease: 'Sine.easeInOut',
        duration: 3000,
        delay: 0,
        x: window.innerWidth / 2,
        y: window.innerWidth / 2,
        angle: 360 * rounds + degrees,
        onComplete: () => {
          this.prizeText.text = this.slicePrizes[this.prize];
        }
      });
    }
  }

}

@Component({
  selector: 'app-prize',
  templateUrl: './prize.page.html',
  styleUrls: ['./prize.page.scss'],
})
export class PrizePage implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerWidth,
      physics: {
        default: 'arcade'
      },
      parent: 'prize',
      backgroundColor: '#000000',
      scene: PrizeScene
    };
  }

  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }

}
