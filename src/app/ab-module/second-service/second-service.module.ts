import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyService } from './second-service.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [MyService]
})
export class SecondServiceModule { }
