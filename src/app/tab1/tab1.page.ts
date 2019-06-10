import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  showProduct = localStorage.getItem('ProductName')
  showType = localStorage.getItem("Type")
  showPrice = localStorage.getItem("Price")
  showSector = localStorage.getItem("Sector")
  showProvince = localStorage.getItem("Province")
  user: firebase.User;
  product = {}

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

  
searchproduct() {
  this.service.SearchProduct().subscribe(
    res => { 
      var data = JSON.stringify(res)
      var jsonData = JSON.parse(data)
      // console.log(jsonData[1].productName)
      // console.log()

      
      for (let i = 1; i < jsonData.length; i++) {
      
        localStorage.setItem("ProductName", jsonData[i].productName)
        localStorage.setItem("Type", jsonData[i].type)
        localStorage.setItem("Price", jsonData[i].price)
        localStorage.setItem("Sector", jsonData[i].sector)
        localStorage.setItem("Province", jsonData[i].province)
        console.log(jsonData[i])

      }

    }
    )
}

}
