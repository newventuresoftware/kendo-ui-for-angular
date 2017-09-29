import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class MovieService {

    constructor(private http: Http) { }

    getMovies(): Observable<object[]> {
        return this.http.get('/assets/data/movies.json')
            .map((res: Response) => {
                const movies: object[] = res.json();
                return movies.slice(-300);
            });
    }
}
