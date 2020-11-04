import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  input="";
  messages: any;

  constructor(
    private chat: ChatService,
    private route: Router,

  ) {    

}

  ngOnInit() {
    this.chat.startChat("0001").then(data => {
      this.chat.getMessages().subscribe(msg => {
        this.messages = msg;
        console.log(this.messages)
      }) 
    });

    

  }

  clickSend(){
    if(this.input==""){
      this.chat.presentToast("Message cannot be empty")
    }else{
      this.chat.sendMessage(this.input).catch(error => {if(error) this.chat.presentToast("fail to send")}).then(doc => { this.input=""})
    }
  }

  check(){
    this.chat.checkTech()
  }

  end(){
    this.chat.endChat().then(data => {
      this.route.navigate(["./landing"])

    })
  }

}
