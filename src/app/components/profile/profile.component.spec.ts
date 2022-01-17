import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: GitProfileComponent;
  let fixture: ComponentFixture<GitProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
