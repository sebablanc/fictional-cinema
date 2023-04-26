import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films/films.service';
import { Film } from 'src/app/models/film';
import { MyComponentsModule } from 'src/app/components/components.module';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.page.html',
  styleUrls: ['./edit-film.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LayoutsModule, MyComponentsModule]
})
export class EditFilmPage implements OnInit {
  film: Film = new Film();

  constructor(
    private navigationSrv: NavigationService,
    private route: ActivatedRoute,
    private filmsSrv: FilmsService,
    private alertSrv: AlertService) { }

  ngOnInit() {
    // Get film ID that exists in path
    const filmId = parseInt(this.route.snapshot.paramMap.get('id') || '');

    // Search and set the film that belong to de id
    if (filmId > 0) this.film = this.filmsSrv.getFilmById(filmId);
  }

  /**
   * this is used on back button
   */
  goBack() {
    this.navigationSrv.goBack();
  }

  /**
   * This function verify if we are creating o editing a film
   * @param event Film to edit
   */
  async verifyHowToProceed(event: Film) {
    /*
    * if id is bigger than Zero, means that we are editing a film
    * on the other hand, we are creating a new film
    */
    if (event.id > 0) {
      let algo = await this.alertSrv.decisionAlert('Are you sure you want to edit this film?');
      if (!algo) return;
      this.filmsSrv.edit(event);
    } else {
      this.filmsSrv.save(event);
    }
    this.goBack();
  }

}
