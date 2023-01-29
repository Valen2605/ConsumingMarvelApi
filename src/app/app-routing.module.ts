import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { EventsComponent } from './components/events/events.component';
import { ComicsComponent } from './components/comics/comics.component';
import { SeriesComponent } from './components/series/series.component';
import { StoriesComponent } from './components/stories/stories.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: '**', component: CharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
