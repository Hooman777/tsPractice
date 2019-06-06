import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vihan',
  templateUrl: './vihan.component.html',
  // styleUrls: ['./vihan.component.css'],
  styles: [`
  h2 {
    color: green;
    font: 1em sans-serif;
    font-style: italic;
    font-size: 1cm;
}
`]
})
export class VihanComponent implements OnInit {

  constructor() { }
  message: string = `Amir hossein, Vihan, Shima`;
  ngOnInit() {
  }

}
