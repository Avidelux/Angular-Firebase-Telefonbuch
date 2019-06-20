import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor() { }

  getEntries(){
    return [
      {name: "Hans", number: "032453"}, 
      {name: "Thomas", number: "4535"},
      {name: "Freddy", number: "348512"},
      {name: "Gustav", number: "904762893"}
    ]
  }
}
