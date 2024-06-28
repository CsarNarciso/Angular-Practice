import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { PageErrorComponent } from './page-error/page-error.component';

export const routes: Routes = [ 
    {path: '', component: HomeComponent},
    {path: 'update/:id', component: UpdateComponent},
    {path: '**', component: PageErrorComponent}
];
