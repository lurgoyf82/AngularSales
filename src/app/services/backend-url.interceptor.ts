import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendConfigService } from './backend-config.service';

@Injectable()
export class BackendUrlInterceptor implements HttpInterceptor {
  constructor(private config: BackendConfigService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const base = this.config.baseUrl.replace(/\/$/, '');
    let url = req.url;
    if (!/^https?:\/\//i.test(url)) {
      url = `${base}/${url.replace(/^\//, '')}`;
    }
    return next.handle(req.clone({ url }));
  }
}
