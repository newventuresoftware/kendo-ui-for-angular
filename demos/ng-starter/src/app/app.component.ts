import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    message = 'Angular Rocks!';
    color = '';
    colors: string[] = [ 'default', 'red', 'green', 'blue' ];

    onColorChange(color: string) {
        this.color = color;
    }

    onAddColorClick(color) {
        console.log(color);
        this.colors.push(color);
    }
}
