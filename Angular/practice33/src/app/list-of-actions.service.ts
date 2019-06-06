import { Injectable } from '@angular/core';
import { toUnicode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class ListOfActionsService {

  constructor() { }
  todo = ['Read books', 'Watch YouTube', 'Ask Amir', 'Keep practicing'];
  
  get Todo() {
    return this.todo;
  }
}
