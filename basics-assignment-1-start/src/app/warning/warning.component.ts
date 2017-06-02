import { Component } from '@angular/core';

@Component({
    selector: 'app-warning',
    templateUrl: './warning.component.html',
    styles: [`
        p {
            background-color: red;
            color: #fff;
            padding: 20px;
            border: 1px solid darkred;
        }
    `]
})

export class WarningComponent {
    warningMessage = `This is a warning message`;
}