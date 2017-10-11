import { Movie } from './../../models/movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    movies: Movie[] = [];

    constructor(private movieService: MovieService) {
        this.movies = this.movieService.getMovies().slice(0, 4);
    }

}
