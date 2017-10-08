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

    series: any[] = [];
    categories: number[] = [];

    constructor(private productService: TopSellingProductsService) { }

    ngOnInit() {
        this.productService.getCountries()
            .subscribe(countries => {
                this.countries = countries;
            });

        this.populateChart(this.selectedCountry);
    }

    handleSelectedCountryChange(country: string) {
        this.populateChart(country);
    }

    private populateChart(country) {
        this.productService.getProductsForCountry(country)
            .subscribe(data => {
                this.series = data.series;
                this.categories = data.categories;
            });
    }
}
