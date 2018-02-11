import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { State } from '../../../core/store/state';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stateStore: State,
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      passwords: this.fb.group({
        password: ['', [Validators.required]],
        repeatPassword: ['', [Validators.required]]
      }, { validator: this.comparePasswords })
    });
  }

  comparePasswords(c: AbstractControl): { [key: string]: boolean } {
    const pass = c.get('password');
    const repeatPassword = c.get('repeatPassword');

    if (pass.value !== repeatPassword.value) {
      return { 'match': true };
    }
    return null;
  }

  signup() {
    this.stateStore.signup(this.getUserDataFromForm());
  }

  login() {
    this.stateStore.goToLogin();
  }

  getUserDataFromForm() {
    return {
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('passwords.password').value
    };
  }
}
