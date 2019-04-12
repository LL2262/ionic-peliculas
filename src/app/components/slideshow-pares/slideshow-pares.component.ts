import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() movies: Movie[] = []
  urlImage: String = environment.imgPath;
  slideOpts = {
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: -10
  }

  constructor() { }

  ngOnInit() {}

}
