import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films/films.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { UiModule } from 'src/app/ui/ui.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, LayoutsModule, UiModule],
})
export class HomePage implements OnInit {
  films: Film[] = [];
  filmsFiltered: Film[] = [];

  constructor(private filmSrv: FilmsService, private navigationSrv: NavigationService) { }

  ngOnInit(): void {
    this.films = this.filmsFiltered = this.filmSrv.filmsList;
  }

  goToDetail(event: number) {
    this.navigationSrv.goTo(`detail-film/${event}`);
  }

  goToEdit(event: number) {
    this.navigationSrv.goTo(`edit-film/${event}`);
  }

  filterFilms(event: string){
    this.filmsFiltered = this.films.filter(film => film.title.toLowerCase().includes(event.toLowerCase()));
  }
}
