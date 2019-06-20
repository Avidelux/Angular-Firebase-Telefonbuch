import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Entry } from './entry.model';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EntryService {

  firebaseCollection = this.firestore.collection('entries');

  constructor( private firestore: AngularFirestore ) {   }

  getEntries(){ // returns all entries in the collection as an observable
    return this.firebaseCollection.snapshotChanges();
  }

  getEntry(id: string){ //returns specific document in the entries-collection
    return this.firebaseCollection.doc(id);
  }


}
