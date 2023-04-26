import { Injectable } from '@angular/core';
import { Film } from 'src/app/models/film';
import films from '../../../assets/film.json';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  public filmsList: Film[] = [];

  constructor() {
    if(this.filmsList.length == 0){
      films.forEach((film: any) => {
        let filmParsed: Film = new Film();
        Object.assign(filmParsed, film);
        this.filmsList.push(filmParsed);
      });

      this.orderFilmListByTitle();
    }
  }

  getFilmById(id: number){
    return this.filmsList.filter((film) => film.id === id)[0];
  }

  deleteFilmById(id: number){
    this.filmsList = this.filmsList.filter((film) => film.id !== id);
  }

  edit(film: Film){
    this.deleteFilmById(film.id);
    this.filmsList.push(film);
    this.orderFilmListByTitle();
    
  }

  save(film: Film){
    film.id = this.filmsList.length + 1;
    this.filmsList.push(film);
    this.orderFilmListByTitle();
  }

  getUserTopFive(){
    let favoriteFives: Film[] = this.filmsList.filter(film => film.rate > 0);;
    this.orderFilmListByRate(favoriteFives);
    return favoriteFives.slice(0,5);
  }

  getFiveIdeas(){
    let favoriteFives = [];
    
    while (favoriteFives.length < 5) {
      let index = this.getRandomIndex();
      let filmToAdd = this.filmsList[index];
      if(!favoriteFives.some(film => film === filmToAdd).valueOf()) favoriteFives.push(this.filmsList[index]);
    }

    return favoriteFives;
  }

  private orderFilmListByTitle(){
    this.filmsList.sort((a,b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
  }

  private orderFilmListByRate(list: Film[]){
   list.sort((a,b) => a.rate < b.rate ? 1 : -1);
  }

  private getRandomIndex() {
    return Math.floor(Math.random() * this.filmsList.length);
  }

}
