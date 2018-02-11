import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { reaction } from 'mobx';

import { State } from './core/store/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    public stateStore: State,
  ) { }

  ngOnInit() {
    reaction(() => this.stateStore.authError, (authError) => {
      if (authError) {
        this.snackBar.open(authError, '', {
          duration: 3000
        });
      }
    });
  }

  logout() {
    this.stateStore.logout();
  }
}
