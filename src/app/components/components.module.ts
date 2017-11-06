import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ComponentsRoutingModule } from './components.routing.module';

import { HomeComponent } from './01-home/home';

@NgModule({
  imports: [ 
    SharedModule, 
    ComponentsRoutingModule 
  ],
  declarations: [ 
    HomeComponent 
  ]
})
export class ComponentsModule { }

