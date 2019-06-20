import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from '../entry.service';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})

export class DetailViewComponent implements OnInit {

  entryID; 
  entry;
  public showContent: boolean = false;

  constructor( private route: ActivatedRoute, private entryService: EntryService ) { }
  
  ngOnInit() {
    setTimeout(()=>this.showContent=true, 1000); // delay html page execution in order to have entry-variable fully loaded before accessing its name-property
    this.getID();
    this.displayEntry(this.entryID);
  }

  getID(){
    this.entryID = this.route.snapshot.paramMap.get('id');
    console.log(this.entryID);
  }

  displayEntry(id: string){ 
    this.entryService.getEntry(id).get().toPromise().then(
      documentSnapshot => {this.entry = documentSnapshot.data()}
    )
      
    

  }

}
