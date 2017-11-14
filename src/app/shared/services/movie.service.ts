import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class MovieService extends BaseApiService  {

  private static baseEndPoint = `${BaseApiService.baseApi}/films/?search=`;

  constructor(private http: Http) {
    super ();
   }

   findMovies(key): Observable<any> {
    return this.http.get(MovieService.baseEndPoint + key, BaseApiService.defaultOptions)
    .map(res => res.json())
    .catch(super.handleError); 
    }

  getMovieDetails(episode_id: string): Observable<Movie> {
    return this.http.get(MovieService.baseEndPoint + episode_id, BaseApiService.defaultOptions)
    .map(res => res.json())
    .catch(super.handleError);
  } 
  
}
  
