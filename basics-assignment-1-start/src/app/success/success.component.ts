import { Component } from '@angular/core';

@Component({
    selector: '[app-success]',
    templateUrl: './success.component.html',
    styles: [`
        p {
            background-color: green;
            color: #fff;
            padding: 20px;
            border: 1px solid darkgreen;
        }
    `]
})

export class SuccessComponent {
    successWarning = `This is a success message`;
}