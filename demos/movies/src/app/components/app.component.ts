import { Component, ViewEncapsulation } from '@angular/core';
import { Movie } from './../models/movie';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'My Movies';

    movies: Movie[] = [
        new Movie(1, 'The Departed'),
        new Movie(2, 'The Godfather'),
        new Movie(3, 'Titanic'),
        new Movie(4, 'Avengers'),
        new Movie(5, 'Casino Royale'),
        new Movie(6, 'Dr. Strangelove'),
        new Movie(7, 'Dead Poet Society'),
        new Movie(8, 'Batman Begins')
    ];

    selectedMovie: Movie;

    selectMovie(movie: Movie) {
        this.selectedMovie = movie;
    }
}
