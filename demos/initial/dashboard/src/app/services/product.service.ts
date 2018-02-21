import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient, @Inject('baseUrl') private baseUrl) { }

    // GET /api/products/top-selling/:country?series=true&from=<DATE>&to=<DATE>

    // GET /api/products?id=<NUMBER>&id=<NUMBER>...
}
