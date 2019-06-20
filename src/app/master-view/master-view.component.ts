import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Entry } from '../entry.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.css']
})
export class MasterViewComponent implements OnInit {

  entries: Entry[];
  formData: Entry;

  constructor( private entryService: EntryService ) { }

  ngOnInit() {
    this.loadEntries();
    this.resetForm();
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
  }

  resetForm(form ?: NgForm){
    if(form != null)
      form.resetForm();
    this.formData = {
      id: null,
      name: '',
      surname: '',
      number: '',
      mail: '',
    }
  }

  onSubmit(form: NgForm){
    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id == null){
      this.entryService.firebaseCollection.add(data);
    }
    this.resetForm(form);
  }

  

}
