import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentMainComponent } from './content-main/content-main.component';
import { LowbarMainComponent } from './lowbar-main/lowbar-main.component';
import { TopbarMainComponent } from './topbar-main/topbar-main.component';
import { SidebarMainComponent } from './sidebar-main/sidebar-main.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentMainComponent,
    LowbarMainComponent,
    TopbarMainComponent,
    SidebarMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
