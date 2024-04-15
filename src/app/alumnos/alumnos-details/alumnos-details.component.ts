import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../../core/services/alumno.service';
import { Alumno } from '../../core/models/alumno.interface';

@Component({
  selector: 'app-alumnos-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './alumnos-details.component.html',
  styleUrl: './alumnos-details.component.css'
})
export class AlumnosDetailsComponent implements OnInit {
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  apiService = inject(AlumnoService)
  alumno?: Alumno;
  Alumnoform?: FormGroup;

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('slug');
    if(id) {
      this.apiService.get(parseInt(id))
      .subscribe( alumno => {
        this.alumno = alumno
        this.Alumnoform = this.fb.group({
          name: [alumno.name,[Validators.required]],
          lastName: [alumno.lastName,[Validators.required]],
          email: [alumno.email,[Validators.required]],
        });
      })
    }
    
    
  }


  update(){ 
    const alumno = this.Alumnoform!.value;

    this.apiService.update(this.alumno!.id,alumno)
    .subscribe(() => {
      this.router.navigate(['/alumnos'])
    })

  }

}
