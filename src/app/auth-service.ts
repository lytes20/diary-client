import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { INITIAL_USER_STATE, LoginResponse, User } from './types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #http = inject(HttpClient);
  token = signal('');
  user = signal<User>(INITIAL_USER_STATE);
  constructor() {
    effect(() => {
      localStorage.setItem('token', this.token());
      localStorage.setItem('user', JSON.stringify(this.user()));
    });
  }

  login(body: { email: string; password: string }) {
    const url = 'http://127.0.01:3030/api/v1/login';
    return this.#http.post<LoginResponse>(url, body);
  }

  isLoggedIn() {
    return this.token() ? true : false;
  }
}
