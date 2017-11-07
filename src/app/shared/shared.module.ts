import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MasterpageComponent } from './components/masterpage.component';
import { ControlMonitorComponent } from './components/control-monitor.component';
import { CheckedComponent } from './components/checked.component';
import { IconsSelectorComponent } from './components/icons-selector.component';
 
@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [ 
    MasterpageComponent,
    ControlMonitorComponent,
    CheckedComponent,
    IconsSelectorComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MasterpageComponent,
    ControlMonitorComponent,
    IconsSelectorComponent
  ]
})
export class SharedModule { }