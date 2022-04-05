import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailComponent } from './missiondetail/missiondetail.component';

const routes: Routes = [
   { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: MissionlistComponent },
  { path: 'detail', component: MissiondetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

