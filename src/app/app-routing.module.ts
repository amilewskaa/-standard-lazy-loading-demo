import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Module1Component } from './module-1/module-1.component';

const routes: Routes = [
  {
    path: 'module-1',
    component: Module1Component,
  },
  {
    path: 'module-2',
    loadChildren: () =>
      import('./module-2/module-2.module').then((m) => m.Module2Module),
  },
  { path: '', redirectTo: 'module-1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
