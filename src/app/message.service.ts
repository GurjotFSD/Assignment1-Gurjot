import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private message = new BehaviorSubject<string>("default");
  current = this.message.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.message.next(message);
  }

  getMessage() {
    return this.message.asObservable();
  }
}
