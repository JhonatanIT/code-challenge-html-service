import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesComponent } from './vehicles.component';
import { VehiclesService } from '../service/vehicles.service';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { HttpClientModule } from '@angular/common/http';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatCardHarness } from '@angular/material/card/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { AppRoutingModule } from '../app-routing.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesComponent],
      imports: [
        HttpClientModule,
        MaterialDesignModule
      ],
      providers: [
        VehiclesService,
        {
          provide: ActivatedRoute, useValue: {
            params: of({ bac: 122345 })
          }
        }
      ]
    });
    fixture = TestBed.createComponent(VehiclesComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find all cards', async () => {
    const cards = await loader.getAllHarnesses<MatCardHarness>(MatCardHarness);
    expect(cards.length).toBe(1);
  });

  it('should find card with title', async () => {
    const cards = await loader.getAllHarnesses<MatCardHarness>(MatCardHarness.with({ title: 'Vehicles - BAC 122345' }));
    expect(cards.length).toBe(1);
  });
});
