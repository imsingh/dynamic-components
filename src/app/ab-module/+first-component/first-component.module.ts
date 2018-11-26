import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component.component';
import { AbstractService } from '../abstract.service';
@NgModule({
  declarations: [FirstComponentComponent],
  imports: [
    CommonModule
  ],
  providers: [AbstractService],
  exports: [ FirstComponentComponent],
  entryComponents: [FirstComponentComponent]
})
export class FirstComponentModule { }
