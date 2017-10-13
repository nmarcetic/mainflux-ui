import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'signup-form',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.scss' ],
  providers: [
  ],
})
export class SignupComponent {
  model: any = {};
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    console.log('hello `Signup` component');
  }

  public signup() {
    this.authService
     .signup(this.model)
     .subscribe(() => this.router.navigateByUrl('/dashboard'));
    }
}
