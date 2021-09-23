import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DisplayTwoComponent } from './components/displayTwo/displayTwo.component';
import { FormsModule } from '@angular/forms';
import { TabIconComponent } from './components/svgIcon/tab-icon/tab-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    DisplayTwoComponent,
    TabIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
