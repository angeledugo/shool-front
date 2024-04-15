import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from '../../core/services/teacher.service';

@Component({
  selector: 'app-teacher-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './teacher-new.component.html',
  styleUrl: './teacher-new.component.css'
})
export class TeacherNewComponent {

  private fb = inject(FormBuilder)
  private router = inject(Router)
  apiService = inject(TeacherService)

  form = this.fb.group({
    name: [],
    lastName: [],
    email: []
  });
  

  create(){
    

    const teacher = this.form.value;

    this.apiService.create(teacher).subscribe(() => {
      this.router.navigate(['/teachers'])
    })
    
  }


}
