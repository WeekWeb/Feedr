import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ContentMainComponent } from './content-main/content-main.component';
import { LowbarMainComponent } from './lowbar-main/lowbar-main.component';
import { TopbarMainComponent } from './topbar-main/topbar-main.component';
import { SidebarMainComponent } from './sidebar-main/sidebar-main.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchBarFilterPipe } from './search-bar-filter.pipe';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import {sessionInterceptor} from "./sessionInterceptor";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: MainComponent},
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContentMainComponent,
    LowbarMainComponent,
    TopbarMainComponent,
    SidebarMainComponent,
    CreateEventComponent,
    LoginPageComponent,
    SearchBarFilterPipe,
    SidebarAdminComponent,
    MainComponent,
    AdminComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule //needed for http get, post, delete etc...
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: sessionInterceptor, multi: true}],//interceptor
  bootstrap: [AppComponent]
})
export class AppModule { }
