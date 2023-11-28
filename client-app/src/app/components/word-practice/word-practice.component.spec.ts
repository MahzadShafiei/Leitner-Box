import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPracticeComponent } from './word-practice.component';

describe('WordPracticeComponent', () => {
  let component: WordPracticeComponent;
  let fixture: ComponentFixture<WordPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordPracticeComponent]
    });
    fixture = TestBed.createComponent(WordPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
