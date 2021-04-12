import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { scrollToError } from 'src/app/util';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  public personalInformationForm: FormGroup;
  public formReady = new EventEmitter();
  public isPersonalFormValid = new EventEmitter();
  @Input() profileDetails: any;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
    if(this.profileDetails) {

    }
  }

  initializeForm() {
    this.personalInformationForm = this._fb.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('')])],
      mobile: ['', Validators.compose([Validators.required, Validators.pattern('')])],
    });

    this.formReady.emit(this.personalInformationForm);
  }

  patchPersonalInformation() {
    this.personalInformationForm.patchValue(this.profileDetails);
  }

  processForm() {
    if(this.personalInformationForm.valid) {
      this.isPersonalFormValid.emit(true);
    } else {
      setTimeout(() => scrollToError('validation-error'), 100);
    }
  }
}
