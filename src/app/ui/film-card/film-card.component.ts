import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films/films.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent  implements OnInit {
  @Input() film: Film = new Film();
  @Output('seeDetail') detailFilm: EventEmitter<number> = new EventEmitter();
  @Output('edit') editFilm: EventEmitter<number> = new EventEmitter();

  constructor(private filmsSrv: FilmsService) { }

  ngOnInit() {}

  rateFilm(event: number){
    this.film.rate = event + 1;
    this.filmsSrv.edit(this.film);
  }

}
