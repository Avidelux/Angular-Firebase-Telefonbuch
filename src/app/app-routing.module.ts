import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { MasterViewComponent } from './master-view/master-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

const routes: Routes = [
  {path: '', component: MasterViewComponent},
  {path: 'entry/:id', component: DetailViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
