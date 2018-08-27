import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent implements OnInit {
  player: YT.Player;
  private id: string = 'MhPf0QqEC68';
  public content = `<h2 class="cardContentHeading">Smooth parallex animation with pure javascript</h2>
  <p>It is nessesory to initialize between 0 to 1, this determines how far is our object.
  According to this movement of object calculates itself.
  Far the object slow will be the movement, nearer the object fast will be the movement.</p>`;
  constructor() { }

  ngOnInit() {
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
