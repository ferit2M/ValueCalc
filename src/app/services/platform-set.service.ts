import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformSetService {

  constructor() { }

  isMobile: Boolean;
}
