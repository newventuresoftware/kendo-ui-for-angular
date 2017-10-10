import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
    declarations: [
        AppComponent,
        MovieDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
