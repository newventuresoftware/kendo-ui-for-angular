import { MovieService } from '../services/movie.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { Movie } from './../models/movie';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'My Movies';
}
