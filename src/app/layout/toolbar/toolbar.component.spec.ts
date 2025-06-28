import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';

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

  it('should display menu button', () => {
    const menuBtn = fixture.nativeElement.querySelector('button[mat-icon-button]');
    expect(menuBtn).toBeTruthy();
  });

  it('should disable buttons based on current url', () => {
    component.currentUrl = component.LOCAL_IIS;
    fixture.detectChanges();
    const buttons: HTMLButtonElement[] = fixture.nativeElement.querySelectorAll('button[mat-button]');
    const localBtn = buttons[0];
    const awsBtn = buttons[1];
    expect(localBtn.disabled).toBeTrue();
    expect(awsBtn.disabled).toBeFalse();

    component.currentUrl = component.AWS_URL;
    fixture.detectChanges();
    expect(localBtn.disabled).toBeFalse();
    expect(awsBtn.disabled).toBeTrue();
  });

  it('should invoke selectBackend on button click', () => {
    spyOn(component, 'selectBackend');
    const buttons: HTMLButtonElement[] = fixture.nativeElement.querySelectorAll('button[mat-button]');
    const localBtn = buttons[0];
    const awsBtn = buttons[1];
    localBtn.click();
    awsBtn.click();
    expect(component.selectBackend).toHaveBeenCalledWith('local');
    expect(component.selectBackend).toHaveBeenCalledWith('aws');
  });
});
