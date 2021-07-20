import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-phonebookentry',
  templateUrl: './phonebookentry.component.html',
  styleUrls: ['./phonebookentry.component.css']
})
export class PhonebookentryComponent implements OnInit {
  private sub:any;
  id:number;
  constructor(private location: Location) { }

  ngOnInit() {
  }

  navigateBack() {
    this.location.back();
  }

}
