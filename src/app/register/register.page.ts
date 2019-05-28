import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerUserData = {}

  constructor(

    private regis: ServiceService,
    private _router: Router

  ) { }


  registerUsers() {
    this.regis.registerUser(this.registerUserData)
      .subscribe(
        res => { 
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigateByUrl('/tabs')
        },
        err => console.log(err)
      )
  }
  ngOnInit() {

  }
}


