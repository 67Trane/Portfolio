import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightstalkerComponent } from './nightstalker.component';

describe('NightstalkerComponent', () => {
  let component: NightstalkerComponent;
  let fixture: ComponentFixture<NightstalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NightstalkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightstalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
