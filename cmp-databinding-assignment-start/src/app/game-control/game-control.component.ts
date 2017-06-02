import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalEvent = new EventEmitter<{counter: number}>();
  intervalHolder: any;
  counter: number = 1;

  onGameStarted() {
    this.intervalHolder = setInterval(() => {
      this.intervalEvent.emit({counter: this.counter++});
    }, 1000);
  }

  onGameStopped() {
    clearInterval(this.intervalHolder);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
