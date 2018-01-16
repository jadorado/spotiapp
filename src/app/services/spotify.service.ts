import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  bearer = " BQAo_yMItfxiLOnx52DO79vliZvFdsIGTOmEUNokXMfb6FI0UHc2C1BkbBHx1SZdiDrjP-Z38E-e2zyZKIc";

  constructor(public httpClient: HttpClient) { }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': `Bearer ${this.bearer}`
    });

    return headers;
  }

  getTop(id: string) {
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;

    return this.httpClient.get(url, {headers: this.getHeaders()});

  }

  getArtist(id: string) {
    let url = `${this.urlSpotify}artists/${id}`;

    return this.httpClient.get(url, {headers: this.getHeaders()});

  }

  getArtists(term: string) {
    let url = `${this.urlSpotify}search?query=${term}&type=artist&limit=20`;

    return this.httpClient.get(url, {headers: this.getHeaders()})
      .map( (response: any) => {
        this.artists = response.artists.items;
        return this.artists;
      });

  }

}
