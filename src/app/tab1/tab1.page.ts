import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  movies: Movie[] = [];
  popularMovies: Movie[] = [];

  constructor(private _movieService: MoviesService){}

  ngOnInit(){
    this._movieService.getMovies().subscribe(
      res => {
        this.movies = res.results;
    });

    this._movieService.getPopularMovies().subscribe(
      res => {
        this.popularMovies = res.results;
      });
  }


}
