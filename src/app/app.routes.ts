import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: 'alumnos',
        loadChildren: () => import('./alumnos/alumnos.routes').then(m => m.ALUMNOS_ROUTES)
    },
    {
        path: 'teachers',
        loadChildren: () => import('./teachers/teachers.routes').then(m => m.TEACHER_ROUTES)
    },
    {
        path: 'notas',
        loadChildren: () => import('./notas/notas.routes').then(m => m.NOTAS_ROUTES)
    },
];
