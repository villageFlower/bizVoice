import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

export class WaitroomPage implements OnInit {
  queueNo:any;
  play=false;

  constructor(
    private chat: ChatService,
  ) {
  }
  
  ngOnInit() {
    this.chat.joinQueue();
    this.chat.checkQueue().subscribe( data => {
      let queue = data;
      if(queue[0].id == localStorage.getItem("email")){
        this.chat.checkTech()
      }else{
        for(let i = 0; i < queue.length; i++){
          if(queue[i].id == localStorage.getItem("email")){
            this.queueNo = i
          }

      }
      }
    })
  }

  clickPlay(){
    this.play = true;
  }

}
