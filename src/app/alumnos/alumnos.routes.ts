import { Routes } from '@angular/router';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';
import { AlumnosDetailsComponent } from './alumnos-details/alumnos-details.component';
import { AlumnosNewComponent } from './alumnos-new/alumnos-new.component';

export const ALUMNOS_ROUTES: Routes = [
    { path: '', component: AlumnosListComponent },
    { path: 'new', component: AlumnosNewComponent },
    { path: ':slug', component: AlumnosDetailsComponent }
];