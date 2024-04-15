import { Alumno } from "./alumno.interface";
import { Teacher } from "./teacher.interface";

export interface Nota {
    id: number;
    name:  string;
    valor:  string;
    teacher: Teacher
    student: Alumno

}



