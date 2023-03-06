import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarIncidenciaAdmComponent } from './gestionar-incidencia-adm.component';

describe('GestionarIncidenciaAdmComponent', () => {
  let component: GestionarIncidenciaAdmComponent;
  let fixture: ComponentFixture<GestionarIncidenciaAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarIncidenciaAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarIncidenciaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
