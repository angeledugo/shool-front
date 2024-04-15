import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Nota } from '../../core/models/nota.interface';
import { NotaService } from '../../core/services/nota.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nota-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nota-list.component.html',
  styleUrl: './nota-list.component.css'
})
export class NotaListComponent implements OnInit {

  notas?: Nota[] | [];
  private router = inject(Router)
  apiService = inject(NotaService)


  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.apiService.getAll().subscribe(
      (notas: Nota[]) => {
        this.notas = notas;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  


  delete(nota: Nota) {

    this.apiService.delete(nota.id).subscribe(() => {
      this.loadAll();
    })
    

  }
}
