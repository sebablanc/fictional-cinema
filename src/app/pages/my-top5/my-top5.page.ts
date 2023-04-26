import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { UiModule } from 'src/app/ui/ui.module';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films/films.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-my-top5',
  templateUrl: './my-top5.page.html',
  styleUrls: ['./my-top5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LayoutsModule, UiModule]
})
export class MyTop5Page implements OnInit {
  filmsTop5: Film[] = [];

  constructor(private navigationSrv: NavigationService, private filmSrv: FilmsService) { }

  ngOnInit() {
    this.filmsTop5 = this.filmSrv.getUserTopFive();
  }

  goToDetail(event: number) {
    this.navigationSrv.goTo(`detail-film/${event}`);
  }

  goToEdit(event: number) {
    this.navigationSrv.goTo(`edit-film/${event}`);
  }
}
