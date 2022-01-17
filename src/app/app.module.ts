import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitProfileComponent } from './components/profile/profile.component';
import { Effect } from './Directives/effect';
import { CountTimePassedPipe } from './Pipes/time-count.pipe';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GitProfileComponent,
    CountTimePassedPipe,
    Effect,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
