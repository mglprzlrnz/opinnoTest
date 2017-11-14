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

  searcher: string;
  error: string;
  movies: Array<Movie> = [];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }


  onSubmitMovieSearch(movieSearch){
    if (!this.searcher) {
      this.searcher = " ";
    } 
    this.movieService.findMovies(this.searcher).subscribe(
      (res) => {
        movieSearch.reset();
        this.movies = res['results']
        console.log('10:',this.movies)
      },
      (error) => { this.error = error.message; }
      );
  
  }

}

