import { effect, Injectable, signal } from '@angular/core';


export interface AppConfig {
  inputStyle: string;
  theme: string;
  ripple: boolean;
  menuMode: string;
  scale: number;
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  constructor() {
    effect(() => {
      const config = this.config();
      this.changeScale(config.scale)
    }
    )  
  }
  _config: AppConfig = {
    ripple: false,
    inputStyle: 'outlined',
    menuMode: 'static',
    theme: 'lara-light-indigo',
    scale: 14,
  };

  config = signal<AppConfig>(this._config);


  changeScale(value: number) {
    document.documentElement.style.fontSize = `${value}px`;
}
}
