import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;
const lenguage = environment.lenguage

@Injectable({
  providedIn: 'root'
})
export class MoviesService {



  constructor(private _http: HttpClient) { }

  getMovies(){
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;

    let mesString;

    if(mes < 10){
      mesString = '0' + mes;
    }else{
      mesString = mes;
    }

    const inicio = hoy.getFullYear()+'-'+mesString+'-01';
    const fin = hoy.getFullYear()+'-'+mesString+'-'+ultimoDia;

    return this._http.get<RespuestaMDB>(URL+'/discover/movie?primary_release_date.gte='+inicio+'&primary_release_date.lte='+fin+'&api_key='+apiKey+lenguage);

  }

  getPopularMovies(){

    return this._http.get<RespuestaMDB>(URL+'/discover/movie?sort_by=popularity.desc&api_key='+apiKey+lenguage);

  }
}
