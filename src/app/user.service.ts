import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  userArray = [
    { username: 'Pon', Email:'pon@gmail.com' }
    ,{ username: 'Joke', Email:'joke@gmail.com' }
    ,{ username: 'Kate', Email:'kate@gmail.com' }
  ];

  constructor(public http: Http) { }

  getAllUsers(){
    let endpoint = "http://localhost:3000/users";

    this.http.get(endpoint).map(
      res => { return res.json() }
    ).subscribe( data => {
      console.log(data);
      this.userArray = data;
    })
  }

}
