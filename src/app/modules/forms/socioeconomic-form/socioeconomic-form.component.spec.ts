import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioeconomicFormComponent } from './socioeconomic-form.component';

describe('SocioeconomicFormComponent', () => {
  let component: SocioeconomicFormComponent;
  let fixture: ComponentFixture<SocioeconomicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocioeconomicFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocioeconomicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
