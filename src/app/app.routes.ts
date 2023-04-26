import { Routes } from '@angular/router';
import { canActivatePage } from './guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    canActivate: [canActivatePage]
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'change-password',
    loadComponent: () => import('./pages/change-password/change-password.page').then( m => m.ChangePasswordPage)
  },
  {
    path: 'detail-film/:id',
    loadComponent: () => import('./pages/detail-film/detail-film.page').then( m => m.DetailFilmPage),
    canActivate: [canActivatePage]
  },
  {
    path: 'edit-film/:id',
    loadComponent: () => import('./pages/edit-film/edit-film.page').then( m => m.EditFilmPage),
    canActivate: [canActivatePage]
  },
  {
    path: 'edit-film',
    loadComponent: () => import('./pages/edit-film/edit-film.page').then( m => m.EditFilmPage),
    canActivate: [canActivatePage]
  },
  {
    path: 'ideas',
    loadComponent: () => import('./pages/ideas/ideas.page').then( m => m.IdeasPage),
    canActivate: [canActivatePage]
  },
  {
    path: 'my-top5',
    loadComponent: () => import('./pages/my-top5/my-top5.page').then( m => m.MyTop5Page),
    canActivate: [canActivatePage]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
