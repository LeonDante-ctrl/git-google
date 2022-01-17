import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GitProfileComponent} from './components/profile/profile.component';
import { GithubSearchComponent } from './components/search/github-search/github-search.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: GitProfileComponent},
  { path: 'search', component: GithubSearchComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }