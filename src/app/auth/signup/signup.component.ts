import { Component } from '@angular/core';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'signup-form',  // <home></home>
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.sass' ],
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
})
export class SignupComponent {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Signup` component');
  }
}
