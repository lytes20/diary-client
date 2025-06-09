import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  template: ` <p>Email: {{ email() }}</p> `,
  styles: ``,
})
export class Profile {
  email = signal('');
}
