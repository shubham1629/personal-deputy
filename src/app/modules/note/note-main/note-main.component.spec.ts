import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteMainComponent } from './note-main.component';

describe('NoteMainComponent', () => {
  let component: NoteMainComponent;
  let fixture: ComponentFixture<NoteMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
