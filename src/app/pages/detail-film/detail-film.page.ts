import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Film } from 'src/app/models/film';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films/films.service';
import { UiModule } from 'src/app/ui/ui.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.page.html',
  styleUrls: ['./detail-film.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LayoutsModule, UiModule, PipesModule]
})
export class DetailFilmPage implements OnInit {
  film: Film = new Film();

  constructor(
    private navigationSrv: NavigationService,
    private route: ActivatedRoute,
    private filmsSrv: FilmsService,
    private alertSrv: AlertService
  ) { }

  ngOnInit() {
    const filmId = this.route.snapshot.paramMap.get('id') || '';
    this.film = this.filmsSrv.getFilmById(parseInt(filmId));
    
  }

  goBack() {
    this.navigationSrv.goBack();
  }

  async showAlertDelete(){
    let algo = await this.alertSrv.dangerAlert('Are you sure you want to delete this film?');
    if(algo) this.deleteFilm();
  }

  deleteFilm(){
    this.filmsSrv.deleteFilmById(this.film.id);
    this.navigationSrv.goTo('home');
  }

  editFilm(){
    this.navigationSrv.goTo(`edit-film/${this.film.id}`);
  }

  rateFilm(event: number){
    this.film.rate = event + 1;
    this.filmsSrv.edit(this.film);
  }

}
