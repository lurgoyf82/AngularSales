import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { BackendConfigService } from '../../services/backend-config.service';
import { environment } from '../../../environments/environment';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, SidenavComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  readonly localUrl = `${environment.endpoints.local}/GetCartResponse`;
  readonly awsUrl = `${environment.endpoints.aws}/GetCartResponse`;
  currentUrl = this.backendConfig.baseUrl;

  @ViewChild(MatSidenav)
  sidenav?: MatSidenav;

  constructor(private backendConfig: BackendConfigService) {}

  toggleSidenav(): void {
    this.sidenav?.toggle();
  }

  selectBackend(target: 'local' | 'aws'): void {
    this.currentUrl = target === 'local' ? this.localUrl : this.awsUrl;
    this.backendConfig.setBaseUrl(this.currentUrl);
  }
}
