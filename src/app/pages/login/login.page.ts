import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';
import { MyComponentsModule } from 'src/app/components/components.module';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UserService } from 'src/app/services/user/user.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, UiModule, MyComponentsModule]
})
export class LoginPage implements OnInit {

  constructor(
    private toastSrv: ToastService,
    private userSrv: UserService,
    private navigationSrv: NavigationService,
    private localStorageSrv: LocalStorageService) { }

  ngOnInit() {}

  async mostrarResultado(event: any){
    const loginResult = await this.userSrv.login(event);
    if(!loginResult){
      this.toastSrv.presentToast('Something went wrong', 'danger', 'top');
      return;
    }
    this.localStorageSrv.setValue('isLogged', 'true');
    this.navigationSrv.goTo('home');
  }

  createAccount(){
    this.navigationSrv.goTo('register');
  }

}
