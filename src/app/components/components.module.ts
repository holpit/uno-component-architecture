import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ComponentsRoutingModule } from './components.routing.module';

import { HomeComponent } from './01-home/home';
import { SimpleControlComponent } from './02-simple-control/simple-control.component';
import { GroupControlsComponent } from './03-group-controls/group-controls.component';

@NgModule({
  imports: [ 
    SharedModule, 
    ComponentsRoutingModule 
  ],
  declarations: [ 
    HomeComponent,
    SimpleControlComponent,
    GroupControlsComponent
  ]
})
export class ComponentsModule { }

