import { Route, Routes } from '@angular/router';
import { Signin } from './user/signin';
import { Signup } from './user/signup';

export const routes: Routes = [
  { path: '', component: Signin },
  { path: 'signup', component: Signup },
];
