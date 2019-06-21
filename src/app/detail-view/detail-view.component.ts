import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from '../entry.service';
import { Entry } from '../entry.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})

export class DetailViewComponent implements OnInit {

  entryID; 
  entry;
  public showContent: boolean = false;
  public showEditForm: boolean = false;
  formData: Entry;
  columnsToDisplay: string[] = ['name', 'surname', 'number', 'mail'];
  dataSource:Entry[] = [ {id:'3', name: 'jonas', surname: '2r24', number: '34t54', mail: '43grtgr'} ];

  constructor( private route: ActivatedRoute, private entryService: EntryService ) { }
  
  ngOnInit() {
    setTimeout(()=>this.showContent=true, 2000); // delay html page execution in order to have entry-variable fully loaded before accessing its name-property
    this.getID();
    this.displayEntry(this.entryID);
    this.dataSource = [ {id: this.entry.id, name: this.entry.name, surname: this.entry.surname, number: this.entry.number, mail: this.entry.mail} ];
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

  reverse(){
    this.showEditForm = true;
    this.formData = Object.assign({}, this.entry);
  }

  onSubmit(form: NgForm){
    let data = Object.assign({}, form.value);
    delete data.id;
    this.entryService.getEntry(this.entryID).update(data);
    this.formData = {
      id: null,
      name: '',
      surname: '',
      number: '',
      mail: '',
    };
    this.showEditForm = false;
    this.displayEntry(this.entryID);
  }

  onDelete(){
    if(confirm("Delete?")){
      this.entryService.getEntry(this.entryID).delete();
    }
  }

  

}
