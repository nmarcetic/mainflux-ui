import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State, getLoading, getAuthState } from './core/store/index.reducer';
import { State as AuthState } from './core/store/auth/auth.reducer';
import { MatSnackBar } from '@angular/material';
import { AuthenticationService } from './core/services/auth/authentication.service';
import { LogoutAction } from './core/store/auth/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: Observable<boolean>;
  authState: Observable<AuthState>;
  isAuthenticated: Observable<boolean>;

  constructor(
    private store: Store<State>,
    private snackBar: MatSnackBar,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.loading = this.store.select(getLoading);
    this.authState = this.store.select(getAuthState);

    this.isAuthenticated = this.authenticationService.isAuthorized();

    this.authState.subscribe(authState => {
      if (authState.authError) {
        this.snackBar.open(authState.authError, '', {
          duration: 3000
        });
      }
    });
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }
}
