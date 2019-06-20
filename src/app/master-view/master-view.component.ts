import { Component, OnInit } from '@angular/core';

const entries = [
  {name: "Hans", number: "032453"}, 
  {name: "Thomas", number: "4535"},
  {name: "Freddy", number: "348512"},
  {name: "Gustav", number: "904762893"}
]

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.css']
})
export class MasterViewComponent implements OnInit {

  entries = entries;

  constructor() { }

  ngOnInit() {
  }

}
