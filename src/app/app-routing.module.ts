import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Top1Component } from './top1/top1.component';
import { Top2Component } from './top2/top2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

const routes: Routes = [
  {path: 'top1', component: Top1Component},
  {path: 'top2', component: Top2Component,
    children: [
      {path: 'c1', component: Child1Component},
      {path: 'c2', component: Child2Component},
      {path: 'c3', component: Child3Component}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
