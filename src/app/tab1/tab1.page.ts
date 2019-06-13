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
  showImg = localStorage.getItem("Img")
  user: firebase.User;
  allProduct: any[] = []
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
      this.allProduct = jsonData
      // console.log(jsonData[1].productName)
      // console.log()

      
      // for (let i = 1; i < jsonData.length; i++) {
      
      //   localStorage.setItem("ProductName", jsonData[i].productName)
      //   localStorage.setItem("Type", jsonData[i].type)
      //   localStorage.setItem("Price", jsonData[i].price)
      //   localStorage.setItem("Img", jsonData[i].imgUrl)
        
      //   console.log(jsonData[i])

      })
}

}
