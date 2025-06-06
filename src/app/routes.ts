import { Routes } from '@angular/router';
import { Signin } from './user/signin';
import { Signup } from './user/signup';
import { Diary } from './diary/diary';

export const routes: Routes = [
  { path: '', component: Signin },
  { path: 'signup', component: Signup },
  { path: 'diaries', component: Diary },
];
