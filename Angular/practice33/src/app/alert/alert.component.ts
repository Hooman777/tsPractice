import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
 
})
export class AlertComponent implements OnInit {

  constructor() { }

  message: string = "You are welcome to this page."

  ngOnInit() {
  }

}
