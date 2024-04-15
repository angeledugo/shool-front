import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AlumnoService } from '../../core/services/alumno.service';
import { Router } from '@angular/router';
import { Alumno } from '../../core/models/alumno.interface';

@Component({
  selector: 'app-alumnos-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './alumnos-new.component.html',
  styleUrl: './alumnos-new.component.css'
})
export class AlumnosNewComponent {
  private fb = inject(FormBuilder)
  private router = inject(Router)
  apiService = inject(AlumnoService)

  form = this.fb.group({
    name: [],
    lastName: [],
    email: []
  });

  create(){
    

    const alumno = this.form.value;

    this.apiService.create(alumno).subscribe(() => {
      this.router.navigate(['/alumnos'])
    })
    
  }


}
