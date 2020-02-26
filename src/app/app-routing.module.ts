import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  { path: 'post', loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule) },
  { path: 'error', loadChildren: () => import('./pages/errors/errors.module').then(m => m.ErrorsModule) },
  { path: '**', redirectTo: '/error/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
