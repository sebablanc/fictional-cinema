import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  async setValue(key: string, value: string) {
    await Preferences.set({
      key: key,
      value: value
    })
  }

  async getValue(key: string) {
    const { value } = await Preferences.get({ key: key })
    return value;
  }

  async removeValue(key: string) {
    await Preferences.remove({ key: key });
  };
}
