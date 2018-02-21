import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {
    
    constructor(private http: HttpClient, @Inject('baseUrl') private baseUrl) { }

    // GET /api/orders/

    // GET /api/orders/:id
    
}
