import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  user: firebase.User;

  constructor(
    private service: ServiceService,
    private router: Router
  ) {}
  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe( user => {
      console.log( user );
      this.user = user;

});
}
logoutGoogle() {
  console.log("logout...");
  this.service.logout();
}
}
