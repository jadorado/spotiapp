import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  tracks: any[] = [];

  constructor(private activatedRouted: ActivatedRoute, public spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRouted.params
      .map (params => params['id'])
      .subscribe(id => {

        this.spotifyService.getArtist(id)
          .subscribe(artist => {
          this.artist = artist;
        });

        this.spotifyService.getTop(id)
          .map ( (response:any) => response.tracks)
          .subscribe(tracks => {
            this.tracks = tracks;
            console.log(tracks);
          });
      })
  }

}
