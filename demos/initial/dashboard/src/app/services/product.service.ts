
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient, @Inject('baseUrl') private baseUrl) { }

    // GET /api/products/top-selling/:country?series=true&from=<DATE>&to=<DATE>
    getProductsForCountry(country: string,
                          from: Date = new Date(1900, 1, 1),
                          to: Date = new Date()): Observable<any> {

        const requestUrl = `${this.baseUrl}/products/top-selling/${country}?series=true&from=${from}&to=${to}`;

        return this.http.get<any>(requestUrl).pipe(
                map(data => {
                    data.categories = data.categories.map(c => new Date(c));
                    return data;
                }));
    }

    // GET /api/products?id=<NUMBER>&id=<NUMBER>...
    getProductDetails(productIds: number[]): Observable<any> {
        const url = productIds.reduce((resource, id) => (resource + `id=${id}&`), `${this.baseUrl}/products?`);
        return this.http.get(url);
    }
}
