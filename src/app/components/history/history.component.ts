import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history;
  constructor() { }

  ngOnInit() {
    this.history = JSON.parse(localStorage.getItem('history'));
    console.log ("history", this.history)
  }

}
