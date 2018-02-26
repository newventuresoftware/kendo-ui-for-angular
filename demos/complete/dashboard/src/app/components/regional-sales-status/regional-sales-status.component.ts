import { ProductService } from '../../services/product.service';
import { CountryService } from '../../services/country.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-regional-sales-status',
    templateUrl: './regional-sales-status.component.html',
    styleUrls: ['./regional-sales-status.component.scss']
})
export class RegionalSalesStatusComponent implements OnInit {

    selectedCountry = 'USA';
    countries: string[] = [];

    fromDate: Date = new Date(1996, 0);
    toDate: Date = new Date(1998, 11);

    series: any[] = [];
    categories: number[] = [];

    countryMarketShare: any[] = [];

    constructor(private productService: ProductService, private countryService: CountryService) { }

    ngOnInit() {
        this.populatePieChart(this.selectedCountry, this.fromDate, this.toDate);
        this.populateChart(this.selectedCountry, this.fromDate, this.toDate);

        this.countryService.getCountries()
            .subscribe(countries => {
                this.countries = countries;
            });
    }

    handleSelectedCountryChange(country: string) {
        this.selectedCountry = country;
        this.populatePieChart(this.selectedCountry, this.fromDate, this.toDate);
        this.populateChart(this.selectedCountry, this.fromDate, this.toDate);
    }

    handleDateRangeChange() {
        this.populatePieChart(this.selectedCountry, this.fromDate, this.toDate);
        this.populateChart(this.selectedCountry, this.fromDate, this.toDate);
    }

    private populatePieChart(country, fromDate, toDate) {
        this.countryService.getCountrySalesInfo(this.selectedCountry, fromDate, toDate)
            .subscribe(data => {
                this.countryMarketShare = data;
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
