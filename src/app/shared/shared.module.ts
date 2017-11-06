import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterpageComponent } from './components/masterpage.component';
 
@NgModule({
  imports: [ 
    CommonModule 
  ],
  declarations: [ 
    MasterpageComponent
  ],
  exports: [
    CommonModule, 
    MasterpageComponent 
  ]
})
export class SharedModule { }