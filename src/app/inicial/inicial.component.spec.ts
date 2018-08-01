
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialComponent } from './inicial.component';

describe('InicialComponent', () => {
  let component: InicialComponent;
  let fixture: ComponentFixture<InicialComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
