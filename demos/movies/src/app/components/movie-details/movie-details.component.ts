import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
    @Input() movie: Movie;
}
