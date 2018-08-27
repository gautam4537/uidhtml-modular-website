import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public content = `<h2 class="cardContentHeading">Smooth parallex animation with pure javascript</h2>
  <p>It is nessesory to initialize between 0 to 1, this determines how far is our object.
  According to this movement of object calculates itself.
  Far the object slow will be the movement, nearer the object fast will be the movement.</p>`;
  constructor() { }

  ngOnInit() {
  }

}
