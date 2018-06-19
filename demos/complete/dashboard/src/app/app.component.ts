import { CountryService } from './services/country.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = '{ Dashboard }';
    isWebApiUp = true;

    constructor(private countryService: CountryService) { }

    ngOnInit() {
        this.countryService.getCountries()
            .subscribe(() => { }, err => this.isWebApiUp = false);
    }
}
