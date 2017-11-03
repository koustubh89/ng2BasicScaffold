import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post.interface';

@Injectable()
export class HackerNewsService {
  baseUrl: string;
  longDataBaseUrl: string;

  constructor(private _http: Http) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
    this.longDataBaseUrl = 'http://demo0167929.mockable.io';
  }

  // getFeed(feedType:string):Observable<Post[]>{
  //   return fetchAsync(`${this.baseUrl}/${feedType}`);
  // }

  getFeed(feedType: string, largeData: boolean): Observable<Post[]> {
    let url: string;
    if (largeData)  {
      url = this.longDataBaseUrl;
    }
    return this._http
      .get(`${url}/${feedType}`)
      .map(response =>
        response.json()
      );
  }
}

function fetchAsync(url) {
  return new Observable(fetchObserver => {
    let cancelToken = false;
    fetch(url)
      .then(res => {
        if (!cancelToken) {
          return res.json().then(data => {
            fetchObserver.next(data);
            fetchObserver.complete();
          });
        }
      })
      .catch(err => fetchObserver.error(err));
    return () => {
      cancelToken = true;
    };
  });
}
