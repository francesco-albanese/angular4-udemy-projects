import { Subscription } from 'rxjs/Subscription';
import { UsersService } from 'app/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  user1Activated = false;
  user2Activated = false;
  userActivated: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userActivated = this.usersService.usersActivated.subscribe(
      (id: number) => {
        this.user1Activated = false;
        this.user2Activated = false;
        
        if (id === 1) {
          this.user1Activated = true;
        } else if (id === 2) {
          this.user2Activated = true;
        }
      }
    );
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.userActivated.unsubscribe();
  }
}
