import { MovieService } from './services/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './components/app.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MoviesComponent } from './components/movies/movies.component';

const appRoutes: Route[] = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: MovieDetailsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'movies', component: MoviesComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        MovieDetailsComponent,
        DashboardComponent,
        MoviesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        MovieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
