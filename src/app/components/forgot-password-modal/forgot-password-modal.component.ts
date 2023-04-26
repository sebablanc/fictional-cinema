import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  styleUrls: ['./forgot-password-modal.component.scss'],
})
export class ForgotPasswordModalComponent  implements OnInit {
  isModalOpen: boolean = false;
  
  constructor(
    private userSrv: UserService, 
    private toastSrv: ToastService,
    private navigationSrv: NavigationService) { }

  ngOnInit() {}

  openModal(open: boolean){
    this.isModalOpen = open;
  }

  async verifyUserName(event: string){
    const isUserNameCorrect = await this.userSrv.forgotPassword(event);
    if(!isUserNameCorrect){
      this.toastSrv.presentToast('The username does not exists', 'danger', 'top');
      return;
    }
    this.openModal(false);
    this.navigationSrv.goTo('change-password');
  }
}
