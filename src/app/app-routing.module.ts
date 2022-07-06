import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'reactive',
    loadChildren:()=> import('../app/reactive/reactive.module').then(m => m.ReactiveModule)
  },
  {
    path:'template',
    loadChildren:()=> import('../app/template/template.module').then(m => m.TemplateModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
