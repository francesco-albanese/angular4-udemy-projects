import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleVisible = false;
  date = new Date().toLocaleTimeString();
  arr: any = [];
  onToggleVisible() {
    this.toggleVisible = !this.toggleVisible;
    this.arr.push(this.date);
  }

  setBackGround(index) {
    return index >=5 ? `blue` : ``;
  }
}
