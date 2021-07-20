import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any[any];
  private sub:any;
  id:number;
  constructor(private _contactSvc: ContactService, private router: Router, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      });
      
    this._contactSvc.getContacts(this.id).subscribe(data => {
      this.contacts = data;
      console.log(this.contacts);
    });
  }

  navigateBack() {
    this.location.back();
  }

}
