import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { BackendConfigService } from '../../services/backend-config.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, SidenavComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  readonly LOCAL_IIS = 'https://localhost:44310/GetCartResponse';
  readonly AWS_URL = 'https://sales.raphp.net/GetCartResponse';
  currentUrl = this.backendConfig.baseUrl;

  @ViewChild(MatSidenav)
  sidenav?: MatSidenav;

  constructor(private backendConfig: BackendConfigService) {}

  toggleSidenav(): void {
    this.sidenav?.toggle();
  }

  selectBackend(target: 'local' | 'aws'): void {
    this.currentUrl = target === 'local' ? this.LOCAL_IIS : this.AWS_URL;
    this.backendConfig.setBaseUrl(this.currentUrl);
  }
}
