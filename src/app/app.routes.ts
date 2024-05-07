import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path          : 'home',
        loadComponent : () => import('./home/home.component').then(m => m.HomeComponent),
      },
      {
        path          : 'suppliers',
        loadComponent : () => import('./suppliers/suppliers.component').then(m => m.SuppliersComponent),
      },
      { path : '', redirectTo : '/home', pathMatch : 'full' },

];
