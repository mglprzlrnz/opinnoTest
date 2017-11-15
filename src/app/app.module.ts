import { MovieService } from './shared/services/movie.service';
import { BaseApiService } from './shared/services/base-api.service';
import { CharacterService } from './shared/services/character.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { HomeComponent } from './components/home/home.component';
import { CharactersCarouselComponent } from './components/characters-carousel/characters-carousel.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HistoryComponent } from './components/history/history.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movies/:id', component: MovieDetailComponent},
  { path: 'history', component: HistoryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieSearchComponent,
    CharactersCarouselComponent,
    MovieDetailComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CharacterService,
    BaseApiService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

