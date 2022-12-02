import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public mail = "";
  public sujet = "";
  public message = "";
  public mailIsFocused = true;
  public sujectIsFocused = true;
  public messageIsFocused = true;
  public isSend = false;

  constructor() {
  }

  public mailIsValid() {
    // check if mail is valid with regex
    const regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
    return regex.test(this.mail);
  }

  public sujetIsValid() {
    return this.sujet.length >= 12;
  }

  public messageIsValid() {
    return this.message.length >= 12;
  }

  public sendMail() {
    if (this.mailIsValid() && this.sujetIsValid() && this.messageIsValid()) {
      // send mail
      console.log("mail sent");
      this.isSend = true;

      // reset form
      this.mail = "";
      this.sujet = "";
      this.message = "";

      this.mailIsFocused = true;
      this.sujectIsFocused = true;
      this.messageIsFocused = true;
    }
  }


}
