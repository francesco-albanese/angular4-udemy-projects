import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbersArray: {counter: number, isEven: boolean}[] = [];

  onIntervalRun(intervalData: {counter: number}) {
    this.numbersArray.push({
      counter: intervalData.counter,
      isEven: intervalData.counter % 2 === 0 ? true : false
    });
  }
}
