import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsOrdersService {

    constructor(private http: Http) { }

    getOrders(): Observable<any[]> {
        return this.http.get('/assets/data/orders.json').map(res => res.json())
            .map(orders => {
                const filtered = [];

                for (let i = 0; i < orders.length; i += 1) {
                    const order = orders[i];
                    order.OrderDate = this.parseMicrosoftJSONDateString(order.OrderDate);
                    filtered.push(order);
                }

                return filtered;
            });
    }

    getOrderInformation(orderId: number) {
        return this.http.get('/assets/data/order-information.json').map(res => res.json())
            .map(orders => orders.find(o => o.OrderID === orderId));
    }

    getProductDetails(productIds: number[]) {
        return this.http.get('/assets/data/product-details.json').map(res => res.json())
            .map(products => products.filter(p => !!productIds.find(id => id === p.ProductID)));
    }

    private parseMicrosoftJSONDateString(date: string) {
        return new Date(parseInt(date.substr(6)));
    }
}
