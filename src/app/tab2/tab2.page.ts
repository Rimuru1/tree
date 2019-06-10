import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
