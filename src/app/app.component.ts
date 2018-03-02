import { Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'พล';
  username;
  Email;

  userArray = [
  ];

  

  constructor(public userService : UserService){
   
  }

  loadUsers(){
    this.userService.getAllUsers();
  }

  signIn(username){
    //alert('OK ' + username);
    this.title = username;
  }

  createUser(newUsername, newEmail){
    let newUser = {
      username: newUsername,
      Email: newEmail
    };

    this.userService.userArray.push(newUser);

    this.username = "";
    this.Email = "";
  }
}
