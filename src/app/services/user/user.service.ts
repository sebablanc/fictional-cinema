import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private localStorageSrv: LocalStorageService) { }

  async login(userData: any){
    const username = await this.localStorageSrv.getValue('username');
    const password = await this.localStorageSrv.getValue('password');
    return userData && userData.username && userData.username === username && userData.password && userData.password === password;
  }

  async register(userData: any){
    await this.localStorageSrv.setValue('username', userData.username);
    await this.localStorageSrv.setValue('password', userData.password);
    return true;
  }

  async forgotPassword(userNameSended: string){
    const username = await this.localStorageSrv.getValue('username');
    return userNameSended && userNameSended === username;
  }

  async changePassword(newPassword: string){
    await this.localStorageSrv.setValue('password', newPassword);
    return true;
  }

  async canActivate(): Promise<boolean> {
    const isLogged = await this.localStorageSrv.getValue('isLogged');
    return isLogged != null && (isLogged) === 'true';
  }
}
