
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';


@Injectable()
export class OrderService {

    constructor(private http: HttpClient, @Inject('baseUrl') private baseUrl) { }

    // GET /api/orders/
    getOrders(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/orders`).pipe(
                map(data => {
                    data.forEach(x => {
                        x.OrderDate = new Date(x.OrderDate);

                        if (x.ShippedDate) {
                            x.ShippedDate = new Date(x.ShippedDate);
                        }
                    });

                    return data;
                }));
    }

    // GET /api/orders/:id
    getOrderInformation(orderId: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/orders/${orderId}`);
    }

}
