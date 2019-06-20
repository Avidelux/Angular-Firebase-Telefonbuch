import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Entry } from '../entry.model';


@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.css']
})
export class MasterViewComponent implements OnInit {

  entries: Entry[];

  constructor( private entryService: EntryService ) { }

  ngOnInit() {
    this.loadEntries();
  }

  loadEntries(){
    this.entryService.getEntries().subscribe( // get observable from entry.service
      actions =>{this.entries = actions.map(
        item =>{
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data()
            } as Entry;
          }
        )
      } // assign data from observable to entries-array
    )
    console.log(this.entries);
    
  }

}
