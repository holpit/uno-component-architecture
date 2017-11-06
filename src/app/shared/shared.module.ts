import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterpageComponent } from './components/masterpage.component';
import { ControlMonitorComponent } from './components/control-monitor.component';
import { CheckedComponent } from './components/checked.component';
 
@NgModule({
  imports: [ 
    CommonModule 
  ],
  declarations: [ 
    MasterpageComponent,
    ControlMonitorComponent,
    CheckedComponent
  ],
  exports: [
    CommonModule, 
    MasterpageComponent,
    ControlMonitorComponent
  ]
})
export class SharedModule { }