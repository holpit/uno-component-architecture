import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './01-home/home';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
  ])],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}