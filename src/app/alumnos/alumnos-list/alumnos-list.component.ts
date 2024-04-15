import { Component, OnInit, inject } from '@angular/core';
import { Alumno } from '../../core/models/alumno.interface';
import { AlumnoService } from '../../core/services/alumno.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-alumnos-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alumnos-list.component.html',
  styleUrl: './alumnos-list.component.css'
})
export class AlumnosListComponent implements OnInit {
  alumnos?: Alumno[] | [];
  private router = inject(Router)
  apiService = inject(AlumnoService)
  
  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.apiService.getAllAlumnos().subscribe(
      (alumnos: Alumno[]) => {
        this.alumnos = alumnos;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
  delete(alumno: Alumno){
    
    this.apiService.delete(alumno.id).subscribe(() => {
      this.loadAll();
    })
    
  }

}
