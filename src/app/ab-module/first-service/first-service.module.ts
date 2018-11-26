import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyService } from './first-service.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ MyService ]
})
export class FirstServiceModule { }
