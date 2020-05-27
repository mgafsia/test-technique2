import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {Subscription} from 'rxjs';
import {WeatherModel} from '../models/weather.model';

@Component({
  selector: 'weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements  OnInit, OnDestroy {
  subscription: Subscription;
  city = 'paris';

  weather: WeatherModel;
  DATE_FORMAT = 'yyyy/MM/dd h:mm:ss a';

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.subscription = this.weatherService.getWheatherSubscriton(this.city).subscribe(
        result => {
          this.weather = result;
        }
    )
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
