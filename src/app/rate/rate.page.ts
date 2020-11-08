import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {

  allow = false;
  feedback = false;
  content = ""
  @Input() rating: number;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();;


  constructor(
    private chat: ChatService,
    private rout:Router,
  ) {

  }

  ngOnInit() {

  }

  rate(index: number) {
    this.rating = index;
    this.ratingChange.emit(this.rating);
    this.allow= true
    switch(index){
      case 1:
        this.feedback = true;
      case 2:
        this.feedback = true;
        
    }
  }

  getColor(index: number) {
    if(this.isAboveRating(index)){
      return "#A6A6A6"
    }
    switch(this.rating){
      case 1:
        this.feedback = true;
      case 2:
        this.feedback = true;
        return "#E74C3C"
      case 3:
        return "#F39C12"
      case 4:
      case 5:
        return "#2ECC71"
      default:
        return "#A6A6A6"
    }
  }

  isAboveRating(index: number): boolean {
    return index > this.rating;
  }

  clickSubmit(){
    this.chat.rate(this.rating,this.content).then(data => {
      this.chat.presentToast("Thank you for your feedback");
      this.rout.navigate(["./prize"]);
    })
  }

  clickCancelt(){
    this.chat.presentToast("Have A Nice Day");
    this.rout.navigate(["./landing"])
    // this.chat.rate(this.rating,this.content).then(data => {this.chat.presentToast("Thank you for your feedback")})
  }

}
