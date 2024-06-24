import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [ 
    {path: '', component: HomeComponent},
    {path: 'update/:id', component: UpdateComponent}
];
