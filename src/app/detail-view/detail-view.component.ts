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

  constructor( private route: ActivatedRoute, private entryService: EntryService ) { }
  
  ngOnInit() {
    this.getID();

  }

  getID(){
    this.entryID = this.route.snapshot.paramMap.get('id');
    console.log(this.entryID);
  }

  displayEntry(id: string){ 
    this.entryService.getEntry(id).get().toPromise().then(
      function(documentSnapshot){
        if(documentSnapshot.exists){
          var data = documentSnapshot.data();
          console.log(data);
          console.log(
           JSON.stringify(data));
        }else{
          console.log("document doesnt exist");
        }
      }
    )
      
    

  }

}
