import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor( private firestore: AngularFirestore ) {   }

  getEntries(){ // returns all entries in the collection as an observable
    return this.firestore.collection('entries').snapshotChanges();
  }
}
