import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar.component';
import { BackendConfigService } from '../../services/backend-config.service';
import { environment } from '../../../environments/environment';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read endpoint values from environment', () => {
    expect(component.awsBaseUrl).toBe(environment.endpoints.aws);
    expect(component.localBaseUrl).toBe(environment.endpoints.local);
  });

  it('should update base url when selecting backend', () => {
    const service = TestBed.inject(BackendConfigService);
    spyOn(service, 'setBaseUrl').and.callThrough();
    component.selectBackend('local');
    expect(service.setBaseUrl).toHaveBeenCalledWith(component.localBaseUrl);
    expect(component.currentUrl).toBe(component.localBaseUrl);
  });

  it('should display menu button', () => {
    const menuBtn = fixture.nativeElement.querySelector(
      'button[mat-icon-button]'
    );
    expect(menuBtn).toBeTruthy();
  });

  it('should disable buttons based on current url', () => {
    component.currentUrl = component.localBaseUrl;
    fixture.detectChanges();
    const buttons: HTMLButtonElement[] =
      fixture.nativeElement.querySelectorAll('button[mat-button]');
    const localBtn = buttons[0];
    const awsBtn = buttons[1];
    expect(localBtn.disabled).toBeTrue();
    expect(awsBtn.disabled).toBeFalse();

    component.currentUrl = component.awsBaseUrl;
    fixture.detectChanges();
    expect(localBtn.disabled).toBeFalse();
    expect(awsBtn.disabled).toBeTrue();
  });

  it('should invoke selectBackend on button click', () => {
    spyOn(component, 'selectBackend');
    const buttons: HTMLButtonElement[] =
      fixture.nativeElement.querySelectorAll('button[mat-button]');
    const localBtn = buttons[0];
    const awsBtn = buttons[1];
    localBtn.click();
    awsBtn.click();
    expect(component.selectBackend).toHaveBeenCalledWith('local');
    expect(component.selectBackend).toHaveBeenCalledWith('aws');
  });
});
