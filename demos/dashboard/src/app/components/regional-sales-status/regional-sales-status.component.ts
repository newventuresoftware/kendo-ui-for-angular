import { TopSellingProductsService } from '../../services/top-selling-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-regional-sales-status',
    templateUrl: './regional-sales-status.component.html',
    styleUrls: ['./regional-sales-status.component.scss']
})
export class RegionalSalesStatusComponent implements OnInit {
    selectedCountry = 'USA';
    selectedCountryRevenue: number = 0;
    countries: string[] = [];

    fromDate: Date = new Date(1996, 1);
    toDate: Date = new Date(1998, 12);

    series: any[] = [];
    categories: number[] = [];

    countryMarketShare: any[] = [];

    constructor(private productService: TopSellingProductsService) { }

    ngOnInit() {
        this.populatePieChart(this.selectedCountry, this.fromDate, this.toDate);
        this.populateChart(this.selectedCountry, this.fromDate, this.toDate);

        this.productService.getCountries()
            .subscribe(countries => {
                this.countries = countries;
            });
    }

    handleSelectedCountryChange(country: string) {
        this.selectedCountry = country;
        this.populatePieChart(this.selectedCountry, this.fromDate, this.toDate);
        this.populateChart(this.selectedCountry, this.fromDate, this.toDate);
    }

    handleDateRangeChange(date: Date) {
        this.populatePieChart(this.selectedCountry, this.fromDate, this.toDate);
        this.populateChart(this.selectedCountry, this.fromDate, this.toDate);
    }

    private populatePieChart(country, fromDate, toDate) {
        this.productService.getCountrySalesInfo(this.selectedCountry, fromDate, toDate)
            .subscribe(data => {
                this.countryMarketShare = data;
                this.selectedCountryRevenue = this.countryMarketShare.find(x => x.country === country).sales;
            });
    }

    private populateChart(country, fromDate, toDate) {
        this.productService.getProductsForCountry(country, fromDate, toDate)
            .subscribe(data => {
                this.series = data.series;
                this.categories = data.categories;
            });
    }
}
