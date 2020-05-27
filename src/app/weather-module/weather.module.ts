import {NgModule} from '@angular/core';
import {WeatherDisplayComponent} from './weather-display.component';
import {ConvertFtoCPipe} from '../pipes/convert.ftoc.pipe';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    WeatherDisplayComponent,
    ConvertFtoCPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherDisplayComponent
  ],
  providers: []
})
export class WeatherModule {
}
