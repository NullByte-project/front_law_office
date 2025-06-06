import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioButtonModule } from 'primeng/radiobutton';

import { InterviewFormComponent } from './interview-form.component';

describe('InterviewFormComponent', () => {
  let component: InterviewFormComponent;
  let fixture: ComponentFixture<InterviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
