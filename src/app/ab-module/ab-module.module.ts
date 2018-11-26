import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbContainerComponent } from './ab-container/ab-container.component';
import { ReactiveComponentLoaderModule } from '@wishtack/reactive-component-loader';
import { AbstractService } from './abstract.service';

@NgModule({
  declarations: [AbContainerComponent],
  imports: [
    CommonModule,
    ReactiveComponentLoaderModule.withModule({
      moduleId: 'first-component',
      loadChildren: './+first-component/first-component.module#FirstComponentModule'
    }),
    ReactiveComponentLoaderModule.withModule({
        moduleId: 'second-component',
        loadChildren: './+second-component/second-component.module#SecondComponentModule'
    })
  ],
  exports: [ AbContainerComponent ],
  providers: [AbstractService]
})
export class AbModuleModule { }
