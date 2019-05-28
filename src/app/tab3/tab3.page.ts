import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  user: firebase.User;
  constructor(
    private service: ServiceService,
    private router: Router,

  ) {}
  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe(user =>{
      console.log(user);
      this.user = user;
    });
  }
  loginFacebook(){
    console.log("login facebooke...");
    this.service.loginFaceBooks()
  }
  loginGoogle() {
    console.log("login google mail...");
    this.service.login()

  }
      
  logoutGoogle() {
    console.log("logout...");
    this.service.logout();
  }

}
