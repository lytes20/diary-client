import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DiaryService } from './diary-service';

@Component({
  selector: 'app-diary',
  imports: [ReactiveFormsModule],
  templateUrl: 'diary.html',
  styles: ``,
})
export class Diary {
  diaryService = inject(DiaryService);
  entryForm = inject(FormBuilder).nonNullable.group({
    title: ['', Validators.required],
    details: ['', Validators.required],
  });

  get title() {
    return this.entryForm.controls.title;
  }

  get details() {
    return this.entryForm.controls.details;
  }
  handleCreateEntry() {
    const requestBody = {
      title: this.title.value,
      details: this.details.value,
    };
    this.diaryService.add(requestBody).subscribe((response) => console.log);
  }
}
