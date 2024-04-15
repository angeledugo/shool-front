import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NotaService } from '../../core/services/nota.service';
import { Alumno } from '../../core/models/alumno.interface';
import { Teacher } from '../../core/models/teacher.interface';
import { TeacherService } from '../../core/services/teacher.service';
import { AlumnoService } from '../../core/services/alumno.service';

@Component({
  selector: 'app-nota-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nota-new.component.html',
  styleUrl: './nota-new.component.css'
})
export class NotaNewComponent implements OnInit {

  private fb = inject(FormBuilder)
  private router = inject(Router)
  apiService = inject(NotaService)
  alumnoService = inject(AlumnoService)
  teacherService = inject(TeacherService)
  alumnos?: Alumno[] | [];
  teachers?: Teacher[] | [];

  form = this.fb.group({
    name: [],
    valor: [],
    teacher_id: [],
    student_id: []
  });


  ngOnInit(): void {
    // Llama a los métodos para obtener los datos desde el servicio
    this.getProfesores();
    this.getAlumnos();
  }


  getAlumnos() {
    this.alumnoService.getAllAlumnos().subscribe(
      (data) => {
        this.alumnos = data; // Asigna los datos de profesores a la propiedad
      },
      (error) => {
        console.error('Error al obtener Alumnos:', error);
      }
    );
  }


  getProfesores() {
    this.teacherService.getAllTeachers().subscribe(
      (data) => {
        this.teachers = data; // Asigna los datos de profesores a la propiedad
      },
      (error) => {
        console.error('Error al obtener profesores:', error);
      }
    );
  }


  create() {

    const nota = this.form.value;

    
    this.apiService.create(nota).subscribe(() => {
      this.router.navigate(['/notas'])
    })

  }

}
