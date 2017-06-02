import { EventEmitter } from '@angular/core';
export class CounterService {

  activeCounter: number = 0;
  inActiveCounter: number = 0;

  onActiveIncremented() {
    this.activeCounter++;
    return this.onCounterActiveIncremented.emit(this.activeCounter);
  }

  onInactiveIncremented() {
    this.inActiveCounter++;
    return this.onCounterInactiveIncremented.emit(this.inActiveCounter);    
  }

  onCounterActiveIncremented = new EventEmitter<number>();
  onCounterInactiveIncremented = new EventEmitter<number>();

  constructor() { }

}
