import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModIncidenciasAdmComponent } from './mod-incidencias-adm.component';

describe('ModIncidenciasAdmComponent', () => {
  let component: ModIncidenciasAdmComponent;
  let fixture: ComponentFixture<ModIncidenciasAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModIncidenciasAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModIncidenciasAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
