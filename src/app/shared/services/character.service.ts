import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CharacterService extends BaseApiService {

  private static baseEndPoint = `${BaseApiService.baseApi}/people`;

  constructor(private http: Http) { 
    super();
  }

  getFirstPage(): Observable<any> {
    return this.http.get(CharacterService.baseEndPoint, BaseApiService.defaultOptions)
    .map(res => res.json())
    .catch(super.handleError); 
  }


  getNextPage(next): Observable<any> {
    return this.http.get(next, BaseApiService.defaultOptions)
    .map(res => res.json())
    .catch(super.handleError);
  }
}