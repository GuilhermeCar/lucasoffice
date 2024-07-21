import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {
        path: 'error',
        pathMatch: 'full',
        component: ErrorComponent
    }
];
