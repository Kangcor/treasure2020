import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WaldoComponent} from './waldo/waldo.component';
import {HanoiComponent} from './hanoi/hanoi.component';
import {TesoroComponent} from './tesoro/tesoro.component';
import {FinalComponent} from './final/final.component';


const routes: Routes = [
  {
    path: 'tesoro',
    component: TesoroComponent,
  },
  {
    path: 'waldo',
    component: WaldoComponent,
  },
  {
    path: 'hanoi',
    component: HanoiComponent,
  },
  {
    path: 'final',
    component: FinalComponent,
  },
  {
    path: '',
    redirectTo: 'tesoro',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'tesoro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
