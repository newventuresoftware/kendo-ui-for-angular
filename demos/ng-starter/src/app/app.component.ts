import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    message = 'Angular Rocks!';
    fontSize: number = 30;
    color = '';
    colors: string[] = [ '', 'red', 'green', 'blue' ];

    onColorChange(color: string) {
        this.color = color;
    }

    onAddColorClick(color) {
        this.colors.push(color);
    }
}
