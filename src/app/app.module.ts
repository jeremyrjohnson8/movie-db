import { HttpModule } from '@angular/http';
import { AppRoutes } from './../routes';
import { LoginComponent } from './../pages/login/login.component';
import { OmdbService } from './../services/omdb.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { AddTitleComponent } from './../pages/add-title/add-title.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './../pages/landing-component/landing.component';
import { MyMoviesComponent } from './../pages/my-movies/my-movies.component';

   
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddTitleComponent,
    LandingComponent,
    MyMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(environment.firebase)    
  ],
  providers: [
    OmdbService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 