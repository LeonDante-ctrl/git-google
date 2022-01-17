import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountTimePassedPipe } from './Pipes/time-count.pipe';
import { Effect } from './Directives/effect';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { GitProfileComponent } from './components/profile/profile.component';
import { GithubSearchComponent } from './components/search/github-search/github-search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CountTimePassedPipe,
    Effect,
    NavbarComponent,
    GitProfileComponent,
    GithubSearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }