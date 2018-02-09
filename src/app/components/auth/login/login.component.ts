import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { State } from '../../../core/store/state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stateStore: State,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.stateStore.login(this.getUserDataFromForm());
  }

  signup() {
    this.stateStore.goToSignup();
  }

  getUserDataFromForm() {
    return {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
  }
}
