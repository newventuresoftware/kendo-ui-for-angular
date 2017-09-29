import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    movies: object[] = [];

    constructor(private movieService: MovieService) { }

    ngOnInit() {
        this.movieService.getMovies()
            .subscribe(data => this.movies = data);
    }

}
