import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutinModule} from './app-routin.module';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from './shared/shared.module';
import {NewPageModule} from './new-page/new-page.module';
import {EmplsService} from './empl-page/empls.service';
import {AuthService} from './guard/auth.service';
import {AuthGuard} from './guard/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutinModule,
    NewPageModule,
    SharedModule
  ],
  providers: [ AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
