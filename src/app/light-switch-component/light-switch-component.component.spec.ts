import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSwitchComponentComponent } from './light-switch-component.component';
import { toBase64String } from '@angular/compiler/src/output/source_map';

describe('LightSwitchComponentComponent', () => {
  let component: LightSwitchComponentComponent;
  let fixture: ComponentFixture<LightSwitchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightSwitchComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSwitchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', () => {
    expect(component.isOn).toBe(false, 'off at first');
    component.clicked();
    expect(component.isOn).toBe(true,'on after click');
    component.clicked();
    expect(component.isOn).toBe(false,'off after second click');
  });

  it('#clicked() should set #message to "is On"', () => {
    expect(component.message).toMatch(/is Off/i, 'off at first');
    component.clicked();
    expect(component.message).toMatch(/is On/i, 'on after clicked');
    component.clicked();
  });

  
});
