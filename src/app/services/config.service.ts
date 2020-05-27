import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  API_KEY = 'acc2caec8e1294a40424dde232848027';
  QUERY_V = 'data/2.5/weather';

  constructor() {
  }

  public getWeatherUrl(cityName: string) {
    return this.QUERY_V + `?q=${String(cityName)}`;
  }

  public getApiKey() {
    return this.API_KEY;
  }
}
