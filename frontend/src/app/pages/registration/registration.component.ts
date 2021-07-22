import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationAPIService } from 'src/app/core/api/registration-api.service';
import { RegistrationField } from 'src/app/core/models/RegistrationField.interface';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/core/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistrationComponent implements OnInit {
  registrationFields: RegistrationField[] = [];
  form: FormGroup;

  /* ------------------------------- constructor ------------------------------ */

  constructor(
    private api: RegistrationAPIService,
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegistrationService
  ) {}

  /* -------------------------------- ngOnInit; ------------------------------- */

  async ngOnInit() {
    const res: RegistrationField[] = await this.api.getRegistrationField();
    if (res) {
      this.registrationFields = res;
      this.form = this.createControl();
      console.log('this.form :>> ', this.form);
    }
  }

  /* ---------------------------- createControl(){} ---------------------------- */

  createControl() {
    const group = this.fb.group({});
    this.registrationFields.forEach((field) => {
      if (field.required == true) {
        field.validations.push({
          name: 'required',
          message: 'This field should be completed.',
          value: null,
        });
      }
      const control = this.fb.control(
        null,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  /* ---------------------------- bindValidations; ---------------------------- */

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach((valid) => {
        if (valid.name == 'regex') {
          validList.push(Validators.pattern(valid.value));
        } else if (valid.name == 'maxlength') {
          validList.push(Validators.maxLength(valid.value));
        } else if (valid.name == 'minlength') {
          validList.push(Validators.minLength(valid.value));
        } else if (valid.name == 'min') {
          validList.push(Validators.min(valid.value));
        } else if (valid.name == 'max') {
          validList.push(Validators.max(valid.value));
        } else if (valid.name == 'required') {
          validList.push(Validators.required);
        }
      });
      return Validators.compose(validList);
    }
    return null;
  }

  /* -------------------------------- onSubmit; ------------------------------- */
  async onSubmit(event) {
    console.log('this.form :>> ', this.form);
    if (this.form.valid) {
      const data = this.form.getRawValue();
      const res = await this.api.registrationRequest(data);
      if (res) {
        swal
          .fire({
            title: 'Your registration has been successfully finished!',
          })
          .then(() => {
            this.registerService.isRegistered = true;
            this.router.navigate(['/welcome']);
          });
      }
    }
  }
}
