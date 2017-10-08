import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TopSellingProductsService {

    constructor(private http: Http) { }

    getCountries(): Observable<string[]> {
        return this.getProducts()
            .map(ps => {
                const countries = new Set<string>();
                ps.forEach(p => countries.add(p.Country));
                return Array.from(countries).sort();
            })
    }

    getProductsForCountry(country: string): Observable<any> {
        return this.getProducts()
            .map(ps => ps.filter(p => p.Country === country))
            .map(this.mapData);
    }

    private getProducts(): Observable<any> {
        return this.http.get('/assets/data/top-selling-products.json')
            .map(res => res.json());
    }

    private mapData(products) {
        const grouped = {};
        const categories = [];

        for(let product of products) {
            let name = product.ProductName;

            if(!grouped[name]) {
                grouped[name] = { name: name, data: [] };
            }

            grouped[name].data.push(product.Quantity);
            categories.push(new Date(product.Date));
        }

        return {
            series: Object.keys(grouped).map(name => grouped[name]),
            categories
        }
    }
}
