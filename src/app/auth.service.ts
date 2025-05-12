import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private emailSubject = new BehaviorSubject<string>("");
  email$ = this.emailSubject.asObservable();

  setEmail(email:string) {
    const username = email.includes('@') ? email.split('@')[0] : email;
    this.emailSubject.next(username);
  }

  authenticate(email:string, password:string) {
    return email.includes('@') && password.length > 0;
  }
}
