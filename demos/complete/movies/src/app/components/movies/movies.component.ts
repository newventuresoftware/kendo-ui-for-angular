import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent {

    selectedMovie: Movie;
    movies: Movie[];

    constructor(private movieService: MovieService, private router: Router) {
        this.movies = movieService.getMovies();
    }

    selectMovie(movie: Movie) {
        this.selectedMovie = movie;
    }

    goToMovieDetails() {
        this.router.navigate(['/detail', this.selectedMovie.id]);
    }
}
