import { getAuthError, State, getAuthState } from '../../../core/store/index.reducer';
import { State as AuthState } from '../../../core/store/auth/auth.reducer';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';
import { LoginAction } from '../../../core/store/auth/index';
import { GoAction } from '../../../core/store/router/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private store: Store<State>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.store.dispatch(new LoginAction(
      this.getUserDataFromForm()
    ));
  }

  signup() {
    this.store.dispatch(new GoAction({path: ['/signup']}));
  }

  getUserDataFromForm() {
    return {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
  }
}
