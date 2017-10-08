import { TopSellingProductsService } from '../../services/top-selling-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-regional-sales-status',
    templateUrl: './regional-sales-status.component.html',
    styleUrls: ['./regional-sales-status.component.scss']
})
export class RegionalSalesStatusComponent implements OnInit {
    selectedCountry = 'USA';
    countries: string[] = [];

    fromDate: Date;
    toDate: Date;

    series: any[] = [];
    categories: number[] = [];

    constructor(private productService: TopSellingProductsService) { }

    ngOnInit() {
        this.productService.getCountries()
            .subscribe(countries => {
                this.countries = countries;
            });

        this.populateChart(this.selectedCountry, this.fromDate, this.toDate);
    }

    handleSelectedCountryChange(country: string) {
        this.selectedCountry = country;
        this.populateChart(this.selectedCountry, this.fromDate, this.toDate);
    }

    handleDateRangeChange(date: Date) {
        this.populateChart(this.selectedCountry, this.fromDate, this.toDate);
    }

    private populateChart(country, fromDate, toDate) {
        this.productService.getProductsForCountry(country, fromDate, toDate)
            .subscribe(data => {
                this.series = data.series;
                this.categories = data.categories;
            });
    }
}
