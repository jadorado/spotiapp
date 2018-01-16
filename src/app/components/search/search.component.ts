import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  term: string = "";

  constructor(public spotifyService: SpotifyService) {

  }

  searchArtist() {
    if(this.term.length > 2) {
      this.spotifyService.getArtists(this.term).subscribe(
        response => {
        }
      )
    } else {
      return ;
    }
  }


  ngOnInit() {
  }

}
