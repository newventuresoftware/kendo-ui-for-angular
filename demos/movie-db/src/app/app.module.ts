import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

import { MovieService } from './services/movie.service';

@NgModule({
    declarations: [
        AppComponent,
        MovieListComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        GridModule
    ],
    providers: [
        MovieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
