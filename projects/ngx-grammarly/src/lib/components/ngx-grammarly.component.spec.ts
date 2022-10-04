import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGrammarlyComponent } from './ngx-grammarly.component';

describe('NgxGrammarlyComponent', () => {
  let component: NgxGrammarlyComponent;
  let fixture: ComponentFixture<NgxGrammarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGrammarlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxGrammarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
