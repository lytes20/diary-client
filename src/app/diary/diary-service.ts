import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Diary } from '../types';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  #http = inject(HttpClient);

  add(data: Partial<Diary>) {
    const url = 'http://127.0.01:3030/api/v1/login';
    return this.#http.post(url, data);
  }
}
