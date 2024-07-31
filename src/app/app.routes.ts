import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'error'
    },
    {
        path: 'error',
        pathMatch: 'full',
        component: ErrorComponent,
        data: {
            message: 'ESTAMOS FORA DO AR, JÁ ESTAREMOS DE VOLTA',
            buttonMessage: 'Voltar a tela anterior'
        }
    }
];