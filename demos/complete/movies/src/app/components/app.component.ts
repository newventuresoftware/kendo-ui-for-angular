import { MovieService } from '../services/movie.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { Movie } from './../models/movie';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'My Movies';
}
