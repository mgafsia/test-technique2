import { Component } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'weather-display',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherDisplayComponent implements  OnInit {
  title = 'test-technique2';

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
  }


}
