import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient, @Inject('baseUrl') private baseUrl) { }

    getCountries(): Observable<string[]> {
        return this.http.get<string[]>(`${this.baseUrl}/countries`);
    }

    getCountrySalesInfo(country: string,
                        from: Date = new Date(1900, 1, 1),
                        to: Date = new Date()): Observable<any[]> {

        return this.http.get<any[]>(
            `${this.baseUrl}/countries/${country}/sales?from=${from}&to=${to}`);
    }
}
