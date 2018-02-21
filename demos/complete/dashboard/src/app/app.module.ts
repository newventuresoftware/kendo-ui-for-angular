// Angular Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Kendo UI Modules
import 'hammerjs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';

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
        RouterModule.forRoot(appRoutes),
        ChartsModule,
        DropDownsModule,
        DateInputsModule,
        GridModule,
        DialogModule,
        ExcelModule
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
