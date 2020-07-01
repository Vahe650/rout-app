import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {NewPageComponent} from './new-page.component';

@NgModule(
  {
    declarations: [
      NewPageComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      SharedModule
    ],
    providers: []
  }
)
export class NewPageModule {

}


