import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.css']
})
export class MasterViewComponent implements OnInit {

  entries = [];

  constructor( private entryService: EntryService ) { }

  ngOnInit() {
    this.loadEntries();
  }

  loadEntries(){
    this.entries = this.entryService.getEntries();
  }

}
