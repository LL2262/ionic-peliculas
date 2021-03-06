import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies: Movie[] = []
  urlImage: String = environment.imgPath;
  slideOpts = {
    slidesPerView: 3,
    freeMode: true
  }
  constructor() { }

  ngOnInit() {}

}
