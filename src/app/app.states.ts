import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HeaderComponent } from './view/layout/header/header.component';
import { LoginComponent } from './view/login/login.component';


export const appStates : Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',  canActivate : [AuthGuard], component: HeaderComponent ,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
  
]
