import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-layout-with-header',
  templateUrl: './layout-with-header.component.html',
  styleUrls: ['./layout-with-header.component.scss'],
})
export class LayoutWithHeaderComponent  implements OnInit {
  @Input() title: string = '';

  menuItems = [
    {clickFunction: () => this.goTo('home'), label: 'Home'},
    {clickFunction: () => this.goTo('ideas'), label: 'Ideas to watch'},
    {clickFunction: () => this.goTo('my-top5'), label: 'Your Top 5'},
    {clickFunction: () => this.logout(), label: 'Logout'}
  ]
  
  constructor(private navigationSrv: NavigationService, private localStorageSrv: LocalStorageService) { }

  ngOnInit() {}

  goTo(page: string){
    this.navigationSrv.goTo(page);
  }

  logout(){
    this.localStorageSrv.removeValue('isLogged');
    this.goTo('login');
  }

}
