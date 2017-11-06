import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './01-home/home';
import { SimpleControlComponent } from './02-simple-control/simple-control.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'simple-control', component: SimpleControlComponent }
  ])],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}