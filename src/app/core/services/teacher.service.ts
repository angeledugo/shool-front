import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher.interface';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiUrl = 'http://localhost:9090/api/teacher';

  constructor(private http: HttpClient) {}

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl + "/all");
  }

  get(id: number) {
    return this.http.get<Teacher>(this.apiUrl + `/${id}`);
  }

  create(teacher: any) {
    return this.http.post<Teacher>(this.apiUrl + "/create",teacher);
  }

  update(id:number, alumno:any) {
    return this.http.put<Teacher>(this.apiUrl + `/${id}`,alumno);
  }

  delete(id:number) {
    return this.http.delete<void>(this.apiUrl + "/" + id)
  }
}
