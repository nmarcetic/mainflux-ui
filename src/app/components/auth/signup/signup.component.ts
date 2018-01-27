import { GoAction } from '../../../core/store/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { State, getAuthError} from '../../../core/store/index.reducer';
import { AbstractControl } from '@angular/forms';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';

import { SignupAction } from '../../../core/store/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private store: Store<State>,
    private fb: FormBuilder
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
    this.store.dispatch(new SignupAction(
      this.getUserDataFromForm()
    ));
  }

  login() {
    this.store.dispatch(new GoAction({path: ['/login']}));
  }

  getUserDataFromForm() {
    return {
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('passwords.password').value
    };
  }
}
