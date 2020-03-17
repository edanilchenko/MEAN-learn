import { Component, OnInit } from '@angular/core';
import { CheckFormService } from '../check-form.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  name: String;
  login: String;
  email: String;
  password: String;


  constructor(
    private checkForm: CheckFormService,
    private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
  }

  userRegisterClick(){
    const user = {
      name: this.name,
      email: this.email,
      login: this.login,
      password: this.password
    };

    if(!this.checkForm.checkName(user.name)){
      this.flashMessages.show('Name was not input!', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      return false;
    }
    else if(!this.checkForm.checkLogin(user.login)){
      this.flashMessages.show('Login was not input!', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      return false;
    }
    else if(!this.checkForm.checkEmail(user.email)){
      this.flashMessages.show('Email was not input!', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      return false;
    }
    else if(!this.checkForm.checkPassword(user.password)){
      this.flashMessages.show('Password was not input!', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      return false;
    }
  }

}
