import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [RouterLink, FormsModule],
  templateUrl: 'signin.html',
  styleUrl: './sign.css',
})
export class Signin {
  #router = inject(Router);
  handleLogin() {
    this.#router.navigate(['diaries']);
  }
}
