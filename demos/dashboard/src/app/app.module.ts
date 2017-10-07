import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegionalSalesStatusComponent } from './regional-sales-status/regional-sales-status.component';
import { ProductsAndOrdersComponent } from './products-and-orders/products-and-orders.component';
import { TeamEfficiencyComponent } from './team-efficiency/team-efficiency.component';

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
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
