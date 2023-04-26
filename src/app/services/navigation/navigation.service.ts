import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private navCtrl: NavController) { }

  goTo(path: string){
    this.navCtrl.navigateBack(path);
  }

  goBack(){
    this.navCtrl.back();
  }
}
