import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ComponentsRoutingModule } from './components.routing.module';

import { HomeComponent } from './01-home/home';
import { SimpleControlComponent } from './02-simple-control/simple-control.component';
import { GroupControlsComponent } from './03-group-controls/group-controls.component';

import { Formula1Service } from './services/formula1.service';

@NgModule({
  imports: [ 
    SharedModule,
    HttpClientModule,
    ComponentsRoutingModule 
  ],
  declarations: [ 
    HomeComponent,
    SimpleControlComponent,
    GroupControlsComponent
  ],
  providers: [
    Formula1Service
  ]
})
export class ComponentsModule { }

