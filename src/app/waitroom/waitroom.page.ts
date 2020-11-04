import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import * as Phaser from 'phaser';
import { Router } from '@angular/router';


class GameScene extends Phaser.Scene {

  bricks;
  paddle;
  ball;
  constructor(config) {
    super(config);
  }


  preload() {
    this.load.atlas('assets', 'assets/breakout.png', 'assets/breakout.json');
  }


  create() {
    // Enable world bounds, but disable the floor
    this.physics.world.setBoundsCollision(true, true, true, false);
    //  Create the bricks in a 10x6 grid
    this.bricks = this.physics.add.staticGroup({
      key: 'assets', frame: ['blue1', 'red1', 'green1', 'yellow1', 'silver1', 'purple1'],
      frameQuantity: 2,
      gridAlign: { width: 4, height: 6, cellWidth: 64, cellHeight: 32, x: (window.innerWidth - 192) / 2, y: 100 }
    });
    this.ball = this.physics.add.image(window.innerWidth/2, window.innerHeight/2-50, 'assets', 'ball1').setCollideWorldBounds(true).setBounce(1);
    this.ball.setData('onPaddle', true);
    this.paddle = this.physics.add.image(window.innerWidth/2, window.innerHeight/2, 'assets', 'paddle1').setImmovable();
    this.physics.add.collider(this.ball, this.bricks, this.hitBrick, null, this);
    this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this);
    this.input.on('pointermove', function (pointer) {
      this.paddle.x = Phaser.Math.Clamp(pointer.x, 52, 748);
      if (this.ball.getData('onPaddle')) {
        this.ball.x = this.paddle.x;
      }
    }, this);
    this.input.on('pointerup', function (pointer) {
      if (this.ball.getData('onPaddle'))
      {
        this.ball.setVelocity(-75, -300);
        this.ball.setData('onPaddle', false);
      }
    }, this);
  }


  update() {
    if (this.ball.y > 600) {
      this.resetBall();
    }
  }

  hitBrick(ball, brick) {
    brick.disableBody(true, true);
    if (this.bricks.countActive() == 0) {
      this.resetLevel();
    }
  }

  resetBall() {
    this.ball.setVelocity(0);
    this.ball.setPosition(this.paddle.x,  window.innerHeight/2-50);
    this.ball.setData('onPaddle', true);
  }

  resetLevel() {
    this.resetBall();
    this.bricks.children.each(function (brick) {
      brick.enableBody(false, 0, 0, true, true);
    });
  }

  hitPaddle(ball, paddle) {

    var diff = 0;
    if (ball.x < paddle.x) {
      diff = paddle.x - ball.x;
      ball.setVelocityX(-10 * diff);
    }
    else if (ball.x > paddle.x) {
      diff = ball.x - paddle.x;
      ball.setVelocityX(10 * diff);
    }
    else {
      ball.setVelocityX(2 + Math.random() * 8);
    }
  }
}



@Component({
  selector: 'app-waitroom',
  templateUrl: './waitroom.page.html',
  styleUrls: ['./waitroom.page.scss'],
})
export class WaitroomPage implements OnInit {
  queueNo: any;
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor(
    private chat: ChatService,
    private router:Router,
  ) {
    this.config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight/3*2,
      physics: {
        default: 'arcade'
      },
      parent: 'game',
      backgroundColor: '#000000',
      scene: GameScene
    };
  }

  ngOnInit() {
    this.chat.presentToast("You can play a game while we connect you to our technician")
    this.phaserGame = new Phaser.Game(this.config);
    this.chat.joinQueue();
    this.chat.checkQueue().subscribe(data => {
      let queue = data;
      if (queue[0].id == localStorage.getItem("email")) {
        this.chat.checkTech()
      } else {
        for (let i = 0; i < queue.length; i++) {
          if (queue[i].id == localStorage.getItem("email")) {
            this.queueNo = i
          }
        }
      }
    })
  }

  cancelQueue(){
    this.chat.quitQueue().then(data => {
      this.chat.presentToast("canceled queuing")
      this.router.navigate(["./query"])
    })
  }



}
