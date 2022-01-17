import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Effect } from './Directives/effect';
import { CountTimePassedPipe } from './Pipes/time-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CountTimePassedPipe,
    Effect
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
