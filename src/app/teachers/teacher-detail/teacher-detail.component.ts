import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../../core/services/teacher.service';
import { Teacher } from '../../core/models/teacher.interface';

@Component({
  selector: 'app-teacher-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './teacher-detail.component.html',
  styleUrl: './teacher-detail.component.css'
})
export class TeacherDetailComponent implements OnInit {

  private fb = inject(FormBuilder)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  apiService = inject(TeacherService)
  teacher?: Teacher;
  form?: FormGroup;

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('slug');
    if(id) {
      this.apiService.get(parseInt(id))
      .subscribe( teacher => {
        this.teacher = teacher
        this.form = this.fb.group({
          name: [teacher.name,[Validators.required]],
        });
      })
    }
    
    
  }


  update(){ 
    const teacher = this.form!.value;

    this.apiService.update(this.teacher!.id,teacher)
    .subscribe(() => {
      this.router.navigate(['/teachers'])
    })

  }

}
