import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemFormComponent } from './media-item-form.component';

describe('MediaItemFormComponent', () => {
  let component: MediaItemFormComponent;
  let fixture: ComponentFixture<MediaItemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaItemFormComponent]
    });
    fixture = TestBed.createComponent(MediaItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
