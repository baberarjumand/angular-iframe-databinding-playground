import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnerComponent } from './inner/inner.component';
import { MainOuterComponent } from './main-outer/main-outer.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainOuterComponent,
  },
  {
    path: 'inner',
    component: InnerComponent,
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
