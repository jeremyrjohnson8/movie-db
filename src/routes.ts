import { MyMoviesComponent } from './pages/my-movies/my-movies.component';
import { AddTitleComponent } from './pages/add-title/add-title.component';
import { LandingComponent } from './pages/landing-component/landing.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
// src/app/routes.ts

export const AppRoutes: Routes = [
    { path: 'login', component: LoginComponent },

    { path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {path: 'landing/:id', component: LandingComponent},
    {path: 'add-title/:id', component: AddTitleComponent},
    {path: 'my-movies/:id', component: MyMoviesComponent},
    

  ];
  