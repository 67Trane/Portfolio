import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public themeMode: boolean = false;
  public burgermenuIsOpen: boolean = false;
  public languageDe:boolean = false;

  constructor() { }
}
