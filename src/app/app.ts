import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a [routerLink]="['signin']">Sign in</a>
      <a [routerLink]="['profile']">Profile</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.css',
})
export class App {
  protected title = 'diary-client';
}
