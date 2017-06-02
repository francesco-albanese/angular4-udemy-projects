import { UsersService } from './users-service.service';
import { CounterService } from './counter-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {

  @Input() activeCounter: number;
  @Input() inActiveCounter: number;

  ngOnInit() {
    this.counterService.onActiveIncremented.subscribe(
      (counter) => {
        console.info(counter);
      }
    );
  }

  constructor(private counterService: CounterService, private usersService: UsersService) {
  }
  
}
