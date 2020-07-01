import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmplPageComponent} from './empl-page.component';
import {EmployerComponent} from './employer/employer.component';
import {EmplsService} from './empls.service';
import {EmplRoutingModule} from './empl-routing.module';
import {AuthService} from '../guard/auth.service';
import {AuthGuard} from '../guard/auth-guard.service';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule(
  {
    declarations: [
      EmplPageComponent,
      EmployerComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      EmplRoutingModule,
      SharedModule
    ],
    providers: [EmplsService]
  }
)
export class EmplModule {

}


