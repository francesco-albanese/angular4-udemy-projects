import { CounterService } from './../counter-service.service';
import { UsersService } from './../users-service.service';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  
  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.counterService.onActiveIncremented();
  }
}
