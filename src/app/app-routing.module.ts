import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WaldoComponent} from './waldo/waldo.component';


const routes: Routes = [
  {
    path: 'waldo',
    component: WaldoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
