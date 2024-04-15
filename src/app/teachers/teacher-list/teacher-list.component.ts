import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Teacher } from '../../core/models/teacher.interface';
import { TeacherService } from '../../core/services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent {

  teachers?: Teacher[] | [];
  private router = inject(Router)
  apiService = inject(TeacherService)
  
  ngOnInit(): void {
    this.loadAll();
  }


  loadAll() {
    this.apiService.getAllTeachers().subscribe(
      (teacher: Teacher[]) => {
        this.teachers = teacher;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  delete(teacher: Teacher){
    this.apiService.delete(teacher.id).subscribe(() => {
      this.loadAll();
    })

  }


}
