// Angular Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { RegionalSalesStatusComponent } from './components/regional-sales-status/regional-sales-status.component';
import { ProductsAndOrdersComponent } from './components/products-and-orders/products-and-orders.component';

// Services
import { CountryService } from './services/country.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/regional-sales-status', pathMatch: 'full' },
    { path: 'regional-sales-status', component: RegionalSalesStatusComponent },
    { path: 'products-and-orders', component: ProductsAndOrdersComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        RegionalSalesStatusComponent,
        ProductsAndOrdersComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        CountryService,
        OrderService,
        ProductService,
        { provide: 'baseUrl', useValue: 'http://localhost:9000/api' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
