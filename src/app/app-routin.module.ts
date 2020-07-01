import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {NewPageComponent} from './new-page/new-page.component';

const appRouts: Routes = [

  {path: '', component: HomePageComponent},
  {path: 'employers', loadChildren: './empl-page/empl.module#EmplModule'},
  {path: 'new', component: NewPageComponent}
  // {path: 'not-found', component: NotFoundComponent},
  // {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutinModule {


}
