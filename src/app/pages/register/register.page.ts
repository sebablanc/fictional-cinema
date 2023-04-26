import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';
import { MyComponentsModule } from 'src/app/components/components.module';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { UserService } from 'src/app/services/user/user.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, UiModule, MyComponentsModule]
})
export class RegisterPage implements OnInit {

  constructor(private navigationSrv: NavigationService, private userSrv: UserService, private toastSrv: ToastService) { }

  ngOnInit() {}

  backPage(){
    this.navigationSrv.goBack();
  }

  async registerUser(event: any){
    await this.userSrv.register(event);
    this.toastSrv.presentToast('You can login now', 'success', 'top');
  }

}
