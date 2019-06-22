import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { EntryService } from './entry.service';
import { environment } from 'src/environments/environment';
import { DetailViewComponent } from './detail-view/detail-view.component';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

//design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,MatOptionModule, MatSelectModule, MatIconModule } from '@angular/material'
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    MasterViewComponent,
    DetailViewComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatInputModule, MatOptionModule, MatSelectModule, MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
