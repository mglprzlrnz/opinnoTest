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


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movie', component: MovieDetailComponent },
  { path: 'movies/:id', component: MovieDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieSearchComponent,
    CharactersCarouselComponent,
    MovieDetailComponent
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

