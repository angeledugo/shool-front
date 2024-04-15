import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nota } from '../models/nota.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  private apiUrl = 'http://localhost:8000/api/nota';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.apiUrl + "/all");
  }

  get(id: number) {
    return this.http.get<Nota>(this.apiUrl + `/${id}`);
  }

  create(alumno: any) {
    return this.http.post<Nota>(this.apiUrl + "/create",alumno);
  }

  update(id:number, nota:any) {
    return this.http.put<Nota>(this.apiUrl + `/${id}`,{
      name: nota.name,
      valor: nota.valor,
      studentId: nota.student,
      teacherId: nota.teacher
    });
  }

  delete(id:number) {
    console.log(id);
    return this.http.delete<void>(this.apiUrl + "/" + id)
  }
}
