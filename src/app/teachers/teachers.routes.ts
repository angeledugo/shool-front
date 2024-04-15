import { Routes } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherNewComponent } from './teacher-new/teacher-new.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';

export const TEACHER_ROUTES: Routes = [
    { path: '', component: TeacherListComponent },
    { path: 'new', component: TeacherNewComponent },
    { path: ':slug', component: TeacherDetailComponent }
];