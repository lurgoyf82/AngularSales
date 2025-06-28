import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BackendConfigService } from '../../services/backend-config.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  readonly LOCAL_URL = 'https://localhost:44310/GetCartResponse';
  readonly AWS_URL = 'https://sales.raphp.net/GetCartResponse';
  currentUrl = this.backendConfig.baseUrl;

  constructor(private backendConfig: BackendConfigService) {}

  selectBackend(target: 'local' | 'aws'): void {
    this.currentUrl = target === 'local' ? this.LOCAL_URL : this.AWS_URL;
    this.backendConfig.setBaseUrl(this.currentUrl);
  }
}
