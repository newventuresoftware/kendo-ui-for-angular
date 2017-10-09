import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TopSellingProductsService {

    constructor(private http: Http) { }

    getCountries(): Observable<string[]> {
        return this.http.get('/assets/data/countries.json').map(res => res.json());
    }

    getProductsForCountry(country: string, from: Date = new Date(1900, 1, 1), to: Date = new Date()): Observable<any> {
        return this.getProducts()
            .map(ps => ps.filter(p => {
                if (p.Country === country) {
                    const date = new Date(p.Date);
                    return from <= date && date <= to;
                }

                return false;
            }))
            .map(this.mapData);
    }

    getCountrySalesInfo(country: string, from: Date = new Date(1900, 1, 1), to: Date = new Date()) {
        return this.http.get('/assets/data/order-details.json').map(res => res.json())
            .map((orders: any[]) => {
                let countrySales = 0;
                let allSales = 0;


                for (let order of orders) {
                    const date = this.parseMicrosoftJSONDateString(order.orderDate);
                    allSales += order.price;

                    if (order.country === country && (from <= date && date <= to)) {
                        countrySales += order.price;
                    }
                }

                return [
                    { country: 'All', sales: allSales },
                    { country: country, sales: countrySales }
                ];
            });
    }

    private getProducts(): Observable<any> {
        return this.http.get('/assets/data/top-selling-products.json')
            .map(res => res.json());
    }

    private mapData(products) {
        const grouped = {};
        const categories = [];

        for (const product of products) {
            const name = product.ProductName;

            if (!grouped[name]) {
                grouped[name] = { name: name, data: [] };
            }

            grouped[name].data.push(product.Quantity);
            categories.push(new Date(product.Date));
        }

        return {
            series: Object.keys(grouped).map(name => grouped[name]),
            categories
        };
    }

    private parseMicrosoftJSONDateString(date: string) {
        return new Date(parseInt(date.substr(6), 10));
    }
}
