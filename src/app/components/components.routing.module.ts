import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './01-home/home';
import { SimpleControlComponent } from './02-simple-control/simple-control.component';
import { GroupControlsComponent } from './03-group-controls/group-controls.component';
import { TemplateControlsComponent } from './04-template-controls/template-controls.component';
import { WidgetControlsComponent } from './05-widgets-controls/widget-controls.components';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'simple-control', component: SimpleControlComponent },
    { path: 'group-controls', component: GroupControlsComponent },
    { path: 'template-controls', component: TemplateControlsComponent },
    { path: 'widget-controls', component: WidgetControlsComponent }
  ])],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}