import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubject = new BehaviorSubject<string>("");
  message$: Observable<string> = this.messageSubject.asObservable();

  sendText(message: string) {
    this.messageSubject.next(message);
  }
}
