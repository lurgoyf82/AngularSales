import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { BackendConfigService } from '../../services/backend-config.service';
import { environment } from '../../../environments/environment';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read endpoint values from environment', () => {
    expect(component.awsUrl).toBe(
      `${environment.endpoints.aws}/GetCartResponse`
    );
    expect(component.localUrl).toBe(
      `${environment.endpoints.local}/GetCartResponse`
    );
  });

  it('should update base url when selecting backend', () => {
    const service = TestBed.inject(BackendConfigService);
    spyOn(service, 'setBaseUrl').and.callThrough();
    component.selectBackend('local');
    expect(service.setBaseUrl).toHaveBeenCalledWith(component.localUrl);
    expect(component.currentUrl).toBe(component.localUrl);
  });
});
