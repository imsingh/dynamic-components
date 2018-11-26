import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponentComponent } from './second-component.component';
import { AbstractService } from '../abstract.service';

@NgModule({
  declarations: [SecondComponentComponent],
  imports: [
    CommonModule
  ],
  providers: [AbstractService],
  exports: [ SecondComponentComponent ],
  entryComponents: [SecondComponentComponent]
})
export class SecondComponentModule { }
