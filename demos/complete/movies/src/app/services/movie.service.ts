import { Observable, Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {

    private movies: Movie[] = [
        new Movie(1, 'The Departed'),
        new Movie(2, 'The Godfather'),
        new Movie(3, 'Titanic'),
        new Movie(4, 'Avengers'),
        new Movie(5, 'Casino Royale'),
        new Movie(6, 'Dr. Strangelove'),
        new Movie(7, 'Dead Poet Society'),
        new Movie(8, 'Batman Begins')
    ];

    constructor(private http: Http) { }

    getMovies(): Movie[] {
        return this.movies;
    }

    getMovieById(id: number): Movie {
        return this.movies.find(m => m.id === id);
    }
}
