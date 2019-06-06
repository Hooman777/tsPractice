import { Component, OnInit } from '@angular/core';
import { ListOfActionsService } from 'src/app/list-of-actions.service';
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  items: string[];
  constructor(service: ListOfActionsService) { 
    this.items = service.Todo;
  }

  ngOnInit() {
  }

}
