import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State, getLoading, getAuthState } from './core/store/index.reducer';
import { State as AuthState } from './core/store/auth/auth.reducer';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: Observable<boolean>;
  authState: Observable<AuthState>;

  constructor(
    private store: Store<State>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loading = this.store.select(getLoading);

    this.authState = this.store.select(getAuthState);
    this.authState.subscribe(authState => {
      if (authState.authError) {
        this.snackBar.open(authState.authError, '', {
          duration: 3000
        });
      }
    });
  }
}
