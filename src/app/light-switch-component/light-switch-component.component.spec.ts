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
    expect(component.isOn).toBe(false);
    component.clicked();
    expect(component.isOn).toBe(true);
    component.clicked();
    expect(component.isOn).toBe(false);
  });
});
