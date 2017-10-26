import { SearchresultsComponent } from './searchresults/searchresults.component';
import { SearchService } from './search.service';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';
import { FormService } from './form.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  {path: 'form', component: FormComponent},
  { path:'searchresults/:value',component:SearchresultsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavbarComponent,
    SearchbarComponent,
    SearchresultsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule
  ],
  providers: [FormService,HttpModule,SearchService],
  bootstrap: [AppComponent]
})

export class AppModule { }
