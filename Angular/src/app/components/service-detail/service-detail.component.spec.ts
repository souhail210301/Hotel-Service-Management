import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailComponent } from './service-detail.component';

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDetailComponent]
    });
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
