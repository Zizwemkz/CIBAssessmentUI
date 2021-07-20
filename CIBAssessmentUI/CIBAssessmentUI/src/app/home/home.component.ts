import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  phonebooklist: any[any]  = new Array();

  constructor(private _homeSvc: HomeService, private router: Router) { }

  ngOnInit() {
    this._homeSvc.getPhonebooks().subscribe(x => {
      this.phonebooklist = x;
      console.log(x);
    });
  }

  viewBook(id:number) {
    this.router.navigate(['/contacts', id]);
  }

  createPhonebook() {
    this.router.navigate(['newphonebook']);
  }

}
