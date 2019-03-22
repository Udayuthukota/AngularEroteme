import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCardAcceptedQuestionComponent } from './questionNode-card-accepted-questionNode.component';

describe('QuestionCardAcceptedQuestionComponent', () => {
  let component: QuestionCardAcceptedQuestionComponent;
  let fixture: ComponentFixture<QuestionCardAcceptedQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCardAcceptedQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCardAcceptedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
