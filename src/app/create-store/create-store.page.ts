import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.page.html',
  styleUrls: ['./create-store.page.scss'],
})
export class CreateStorePage implements OnInit {
  createStroeData = {}

  constructor(
    private market: ServiceService,
    private _router: Router
  ) { }
  createStroes() {
    this.market.createStroe(this.createStroeData)
      .subscribe(
        res => { 
        console.log(res)
        localStorage.getItem('token',)
        this._router.navigateByUrl('/tabs')
        },
        err => console.log(err)
      )
  }

  ngOnInit() {
  }

}
