import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BackendConfigService {
  private baseUrlSubject = new BehaviorSubject<string>(environment.endpoints.aws);
  readonly baseUrl$ = this.baseUrlSubject.asObservable();

  get baseUrl(): string {
    return this.baseUrlSubject.value;
  }

  setBaseUrl(url: string): void {
    this.baseUrlSubject.next(url);
  }
}
