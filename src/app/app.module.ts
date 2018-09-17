import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormsModule } from 'ngx-custom-validators';
import { StorageServiceModule} from 'angular-webstorage-service';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PromiseService } from './promise.service';
import {HttpModule} from '@angular/http';
import { Obs1Component } from './obs1/obs1.component';
import { TeplateFormComponent } from './teplate-form/teplate-form.component';
import { RepeatComponent } from './repeat/repeat.component'
// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'about',      component: AboutComponent } 
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Obs1Component,
    TeplateFormComponent,
    RepeatComponent
  ],
  imports: [
    FormsModule,
    //RouterModule.forRoot(appRoutes),  
    BrowserModule,
    StorageServiceModule,
    HttpModule,
    CustomFormsModule
  
  ],
  providers: [PromiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
