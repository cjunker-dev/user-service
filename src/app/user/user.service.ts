import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl: string = 'http://localhost:8080/api/users/';

  constructor(
    private http: HttpClient
  ) { }

    //get all
    list(): Observable<User[]> {
      return this.http.get(`${this.baseurl}`) as Observable<User[]>;
    }
    //get by Id
    get(id: number): Observable<User> {
      return this.http.get(`${this.baseurl}${id}`) as Observable<User>;
    }
    //create
    create(user: User): Observable<User> {
      return this.http.post(`${this.baseurl}`, user) as Observable<User>;
    }
    //update
    change(user: User): Observable<User> {
      return this.http.put(`${this.baseurl}${user.id}`, user) as Observable<User>;
    }
    //delete
    remove(user: User): Observable<User> {
      return this.http.delete(`${this.baseurl}${user.id}`) as Observable<User>;

    }
}
