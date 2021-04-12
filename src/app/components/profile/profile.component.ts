import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onFormReady(event) {
    this.profileForm['controls'] = {
      ...this.profileForm['controls'],
      ...event.controls
    };
  }

  onSubmit() {
    
  }

}
