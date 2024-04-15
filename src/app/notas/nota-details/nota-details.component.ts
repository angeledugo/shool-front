import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from '../../core/services/nota.service';
import { Nota } from '../../core/models/nota.interface';
import { AlumnoService } from '../../core/services/alumno.service';
import { TeacherService } from '../../core/services/teacher.service';
import { Alumno } from '../../core/models/alumno.interface';
import { Teacher } from '../../core/models/teacher.interface';

@Component({
  selector: 'app-nota-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nota-details.component.html',
  styleUrl: './nota-details.component.css'
})
export class NotaDetailsComponent implements OnInit {

  private fb = inject(FormBuilder)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  apiService = inject(NotaService)
  alumnoService = inject(AlumnoService)
  teacherService = inject(TeacherService)
  nota?: Nota;
  alumnos?: Alumno[] | [];
  teachers?: Teacher[] | [];
  form?: FormGroup;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('slug');
    if(id) {
      
      this.getProfesores();
      this.getAlumnos();
      this.apiService.get(parseInt(id))
      .subscribe( nota => {
        this.nota = nota
        this.form = this.fb.group({
          name: [nota.name,[Validators.required]],
          valor: [nota.valor,[Validators.required]],
          student: [nota.student,[Validators.required]],
          teacher: [nota.teacher,[Validators.required]],
        });
      })
    }
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


  update() {
    const nota = this.form!.value;
    console.log(nota)
    this.apiService.update(this.nota!.id,nota)
    .subscribe(() => {
      this.router.navigate(['/notas'])
    })
  }

}
