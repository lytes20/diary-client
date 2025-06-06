import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-signin',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: 'signin.html',
  styleUrl: './sign.css',
})
export class Signin {
  #router = inject(Router);
  #authService = inject(AuthService);
  authForm = inject(FormBuilder).group({
    email: '',
    password: '',
  });

  get email() {
    return this.authForm.controls.email;
  }

  get password() {
    return this.authForm.controls.password;
  }
  handleLogin() {
    if (!this.email.value) {
      return;
    }
    if (!this.password.value) {
      return;
    }
    const body = { email: this.email.value, password: this.password.value };
    this.#authService.login(body).subscribe((response) => {
      if (response.status !== 401) {
        this.#authService.token.set(response.token);
        this.#authService.user.set(response.user);
        this.#router.navigate(['diaries']);
      }
    });
  }
}
