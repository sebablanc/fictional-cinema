import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';
import { MyComponentsModule } from 'src/app/components/components.module';
import { UserService } from 'src/app/services/user/user.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, UiModule, MyComponentsModule]
})
export class ChangePasswordPage implements OnInit {

  constructor(private userSrv: UserService, private navigationSrv: NavigationService) { }

  ngOnInit() {
  }

  async changePassword(event: any){
    await this.userSrv.changePassword(event.password);
    this.navigationSrv.goTo('/');
  }

}
