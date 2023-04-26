import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCtrl: AlertController) { }

  async presentAlert(header: string, subHeader: string, message: string, buttons: any) {
    const alert = await this.alertCtrl.create({
      header,
      subHeader,
      message,
      buttons,
    });

    await alert.present();

    return await alert.onDidDismiss().then((data) => {
      return data.role == 'OK' ? true : false;
    });
  }

  async dangerAlert(message: string) {
    const dangerButtons = [
      {
        text: 'Cancel',
        role: 'cancel',
      }, {
        text: 'Yes, delete it',
        role: 'OK',
        cssClass: [`danger-background`]
      }
    ];
    return await this.presentAlert('Alert', '', message, dangerButtons);
  }

  async decisionAlert(message: string){
    const decisionButtons = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: [`alert-cancel-background`]
      }, {
        text: 'Yes, edit it',
        role: 'OK',
        cssClass: [`alert-ok-background`]
      }
    ];
    return await this.presentAlert('You are editing a film', '', message, decisionButtons);
  }
}
