import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpInterceptor implements HttpInterceptor{
  constructor(private configService: ConfigService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = this.configService.getApiKey();
    if (apiKey) {
        req = req.clone({
          url: req.url + `&appid=${apiKey}`
        });
    }
    return next.handle(req);
  }
}
