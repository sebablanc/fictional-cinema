import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { UiModule } from 'src/app/ui/ui.module';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films/films.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.page.html',
  styleUrls: ['./ideas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LayoutsModule, UiModule]
})
export class IdeasPage implements OnInit {
  filmsTop5: Film[] = [];

  constructor(private navigationSrv: NavigationService, private filmSrv: FilmsService) { }

  ngOnInit() {
    this.getIdeas();
  }
  
  getIdeas(){
    this.filmsTop5 = this.filmSrv.getFiveIdeas();
  }

  goToDetail(event: number) {
    this.navigationSrv.goTo(`detail-film/${event}`);
  }

  goToEdit(event: number) {
    this.navigationSrv.goTo(`edit-film/${event}`);
  }

  handleRefresh(event: any){
    setTimeout(() => {
      this.getIdeas();
      event.target.complete();
    }, 1000);
  }

}
