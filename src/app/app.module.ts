import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormsModule } from 'ngx-custom-validators';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PromiseService } from './promise.service';
import { HttpModule } from '@angular/http';
import { Obs1Component } from './obs1/obs1.component';
import { TeplateFormComponent } from './teplate-form/teplate-form.component';
import { RepeatComponent } from './repeat/repeat.component';
import { YoutubeComponent } from './youtube/youtube.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { GmapComponent } from './gmap/gmap.component';
import { AgmCoreModule } from '@agm/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { Doublepipe } from './pipes/double.pipe';
import { TestpipeComponent } from './testpipe/testpipe.component';
import { PowerPipe } from './pipes/power.pipe';
import { DynamicformtwoComponent } from './dynamicformtwo/dynamicformtwo.component';
import { repeatWhen } from 'rxjs/operators';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouteInfo } from './sidebar.metadata';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorInfoComponent } from './doctor/doctor-info/doctor-info.component';
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
    RepeatComponent,
    YoutubeComponent,
    CartComponent,
    GmapComponent,
    DynamicformComponent,
    Doublepipe,
    PowerPipe,
    TestpipeComponent,
    DynamicformtwoComponent,
    BreadcrumbComponent,
    DoctorComponent,
    DoctorInfoComponent
  ],
  imports: [
    FormsModule,
    // RouterModule.forRoot(appRoutes),  
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent,
        data: {
          title: 'home',
          urls: [{ title: 'home', url: '/home' }, { title: 'home' }]
        }
      },
      {
        path: 'about', component: AboutComponent,
        data: {
          title: 'about',
          urls: [{ title: 'home', url: '/home' }, { title: 'about' }]
        }
      },
      { path: 'repeat', component: RepeatComponent },

    ]),

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
    }),
    BrowserModule,
    AngularFontAwesomeModule,
    StorageServiceModule,
    HttpModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [PromiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
