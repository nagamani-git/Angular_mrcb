import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
//import { User } from '../model/user';
import { AppErrorHandler } from '../model/app.errorhandler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']

})
export class AppComponent {
  title: string;
  city: string;
  currentTime: string;
  users: any;

  constructor(public userService: UserService) {
    this.title = 'Welcome to MRCB';
    this.city = 'Hyderabad';
    this.currentTime = new Date().toLocaleString();
    //this.users=[];
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
      console.log(this.users);
    }), ((err: AppErrorHandler) => {
      console.log(err.message);
    });

  }
}
