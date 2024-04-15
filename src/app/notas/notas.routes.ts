import { Routes } from '@angular/router';
import { NotaListComponent } from './nota-list/nota-list.component';
import { NotaNewComponent } from './nota-new/nota-new.component';
import { NotaDetailsComponent } from './nota-details/nota-details.component';

export const NOTAS_ROUTES: Routes = [
    { path: '', component: NotaListComponent },
    { path: 'new', component: NotaNewComponent },
    { path: ':slug', component: NotaDetailsComponent },

];