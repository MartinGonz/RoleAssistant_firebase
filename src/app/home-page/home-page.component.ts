import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild} from '@angular/core';
import { AF } from "../providers/af";
import {FirebaseListObservable} from "angularfire2/database";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  public characters: FirebaseListObservable<any>;

  public newMessage: string;
  public messages: FirebaseListObservable<any>;

  constructor(public afService: AF,private router: Router) {
    this.characters = this.afService.characters;
    this.messages = this.afService.messages;
    }

  ngOnInit() {
  }

  isYou(email) {
    if(email == this.afService.email)
      return true;
    else
      return false;
  }
  isMe(email) {
    if(email == this.afService.email)
      return false;
    else
      return true;
  }

 ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { console.log('Scroll to bottom failed yo!') }
  }
  
  // I forgot to add this but thanks for letting me know in the comments so I could update it!
  sendMessage(){
    this.afService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
  goCharacter(){
    this.router.navigate(['charSheet']);
  }


}
