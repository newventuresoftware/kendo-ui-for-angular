// Angular Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Kendo UI Modules
import 'hammerjs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

// Components
import { AppComponent } from './app.component';
import { RegionalSalesStatusComponent } from './components/regional-sales-status/regional-sales-status.component';
import { ProductsAndOrdersComponent } from './components/products-and-orders/products-and-orders.component';
import { TeamEfficiencyComponent } from './components/team-efficiency/team-efficiency.component';

// Services
import { TopSellingProductsService } from './services/top-selling-products.service';

const appRoutes: Routes = [
    { path: 'regional-sales-status', component: RegionalSalesStatusComponent },
    { path: 'products-and-orders', component: ProductsAndOrdersComponent },
    { path: 'team-efficiency', component: TeamEfficiencyComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        RegionalSalesStatusComponent,
        ProductsAndOrdersComponent,
        TeamEfficiencyComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        ChartsModule,
        DropDownsModule
    ],
    providers: [
        TopSellingProductsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
