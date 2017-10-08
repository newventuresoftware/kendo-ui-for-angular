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
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';

// Components
import { AppComponent } from './app.component';
import { RegionalSalesStatusComponent } from './components/regional-sales-status/regional-sales-status.component';
import { ProductsAndOrdersComponent } from './components/products-and-orders/products-and-orders.component';
import { TeamEfficiencyComponent } from './components/team-efficiency/team-efficiency.component';

// Services
import { TopSellingProductsService } from './services/top-selling-products.service';
import { ProductsOrdersService } from './services/products-orders.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/regional-sales-status', pathMatch: 'full' },
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
        DropDownsModule,
        DateInputsModule,
        GridModule,
        DialogModule
    ],
    providers: [
        TopSellingProductsService,
        ProductsOrdersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
