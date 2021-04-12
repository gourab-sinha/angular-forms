import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactAddressComponent } from './contact-address/contact-address.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ReferenceDetailsComponent } from './reference-details/reference-details.component';

const routes: Routes = [
  {
    path: 'personal-information',
    component: PersonalInformationComponent,
  },
  {
    path: 'address-details',
    component: ContactAddressComponent,
  },
  {
    path: 'reference-details',
    component: ReferenceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
