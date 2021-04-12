import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PersonalInformationComponent } from './components/profile/personal-information/personal-information.component';
import { ContactAddressComponent } from './components/profile/contact-address/contact-address.component';
import { ReferenceDetailsComponent } from './components/profile/reference-details/reference-details.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PersonalInformationComponent,
    ContactAddressComponent,
    ReferenceDetailsComponent,
    ProfileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
