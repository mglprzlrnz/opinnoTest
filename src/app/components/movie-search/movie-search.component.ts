import { MovieService } from './../../shared/services/movie.service';
import { Movie } from './../../shared/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  query: string;
  error: string;
  movies: Array<Movie> = [];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }


  onSubmitMovieSearch(movieSearch){
    if (!this.query) {
      this.query = "";
    } 
    this.movieService.findMovies(this.query).subscribe(
      (res) => {
        movieSearch.reset();
        this.movies = res['results']
        console.log('10:',this.movies)
      },
      (error) => { this.error = error.message; }
      );
  
  }

}

