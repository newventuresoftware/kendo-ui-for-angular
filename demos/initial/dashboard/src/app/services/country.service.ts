import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryService {
    
    constructor(private http: HttpClient, @Inject('baseUrl') private baseUrl) { }

    // GET /api/countries

    // GET /api/countries/:name/sales?from=<DATE>&to=<DATE>
    
}
