import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PhonebookentryComponent } from './phonebookentry/phonebookentry.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
  , { path: 'contacts/:id', component: ContactsComponent },
  { path: 'newphonebook', component: PhonebookentryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
