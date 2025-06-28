import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BackendConfigService } from '../../services/backend-config.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  readonly localUrl = `${environment.endpoints.local}/GetCartResponse`;
  readonly awsUrl = `${environment.endpoints.aws}/GetCartResponse`;
  currentUrl = this.backendConfig.baseUrl;

  constructor(private backendConfig: BackendConfigService) {}

  selectBackend(target: 'local' | 'aws'): void {
    this.currentUrl = target === 'local' ? this.localUrl : this.awsUrl;
    this.backendConfig.setBaseUrl(this.currentUrl);
  }
}
