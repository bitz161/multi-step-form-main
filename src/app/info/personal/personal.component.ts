import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  MinLengthValidator,
} from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(9),
    Validators.maxLength(9),
  ]);

  infoForm = new FormGroup({
    name: this.name,
    email: this.email,
    phoneNumber: this.phoneNumber,
  });
}
