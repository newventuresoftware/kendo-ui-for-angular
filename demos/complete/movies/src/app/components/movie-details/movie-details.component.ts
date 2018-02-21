import { MovieService } from './../../services/movie.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
    @Input() movie: Movie;

    constructor(private movieService: MovieService,
        private route: ActivatedRoute,
        private location: Location) {

        this.route.paramMap
            .subscribe((params: ParamMap) => {
                this.movie = this.movieService.getMovieById(parseInt(params.get('id')));
            });
    }

    goBack(): void {
        this.location.back();
    }
}
