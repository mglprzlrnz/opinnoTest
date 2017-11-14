import { MovieService } from './../../shared/services/movie.service';
import { Movie } from './../../shared/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(private movieService: MovieService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(
      params => {
        this.movieService.getMovieDetails(params['id']).subscribe(
          res => this.movie = res['results'][0]
        )
      }
    )
  }

}
