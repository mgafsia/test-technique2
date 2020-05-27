import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';
import {HttpClient} from '@angular/common/http';
import {WeatherModel} from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private configService: ConfigService, private httpClient: HttpClient) {
  }

  getWheatherSubscriton(cityName: string) {
     return this.httpClient.get<WeatherModel>(this.configService.getWeatherUrl(cityName));
  }
}
