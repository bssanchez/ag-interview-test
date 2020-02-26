import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { ListResolver } from './list/list.resolver';
import { DetailResolver } from './detail/detail.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent, resolve: { posts: ListResolver } },
  { path: 'detail/:id', component: DetailComponent, resolve: { post: DetailResolver } },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ListResolver,
    DetailResolver
  ]
})
export class PostRoutingModule { }
