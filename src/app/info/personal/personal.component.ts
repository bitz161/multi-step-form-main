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
  email = new FormControl('');
  phoneNumber = new FormControl('');

  registerForm = new FormControl({
    name: this.name,
    email: this.email,
    phoneNumber: this.phoneNumber,
  });
}
