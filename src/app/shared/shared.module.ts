import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MasterpageComponent } from './components/masterpage.component';
import { ControlMonitorComponent } from './components/control-monitor.component';
import { CheckedComponent } from './components/checked.component';
import { IconsSelectorComponent } from './components/icons-selector.component';
import { UnoFormComponent } from './widgets/uno-form.components';
import { UnoTextComponent } from './widgets/uno-text.component';
import { UnoSelectComponent } from './widgets/uno-select.component';
import { UnoSelectIconComponent } from './widgets/uno-select-icon.component';
 
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
    IconsSelectorComponent,
    UnoFormComponent,
    UnoTextComponent,
    UnoSelectComponent,
    UnoSelectIconComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MasterpageComponent,
    ControlMonitorComponent,
    IconsSelectorComponent,
    UnoFormComponent,
    UnoTextComponent,
    UnoSelectComponent,
    UnoSelectIconComponent
  ]
})
export class SharedModule { }