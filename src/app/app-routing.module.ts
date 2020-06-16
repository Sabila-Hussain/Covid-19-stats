import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesDataTableComponent } from './states-data-table/states-data-table.component';



const routes: Routes = [ {
  path: '',
  component: StatesDataTableComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
