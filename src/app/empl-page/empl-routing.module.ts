import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmplPageComponent} from './empl-page.component';
import {AuthGuard} from '../guard/auth-guard.service';
import {EmployerComponent} from './employer/employer.component';

const emplRoutes: Routes = [
  {
    path: '', component: EmplPageComponent,
    // loadChildren: './empl.module:EmplModule',
    canActivate: [AuthGuard],
    children: [
      {path: ':id/:name', component: EmployerComponent},

    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(emplRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmplRoutingModule {


}
