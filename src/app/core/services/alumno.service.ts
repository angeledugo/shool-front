import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrl = 'http://localhost:8090/api/student';

  constructor(private http: HttpClient) {}

  getAllAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl + "/all");
  }

  get(id: number) {
    return this.http.get<Alumno>(this.apiUrl + `/${id}`);
  }

  create(alumno: any) {
    return this.http.post<Alumno>(this.apiUrl + "/create",alumno);
  }

  update(id:number, alumno:any) {
    return this.http.put<Alumno>(this.apiUrl + `/${id}`,alumno);
  }

  delete(id:number) {
    return this.http.delete<void>(this.apiUrl + "/" + id)
  }
}
