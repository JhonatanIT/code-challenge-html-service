import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader, parallel } from '@angular/cdk/testing';
import { MatTableHarness } from '@angular/material/table/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { DealersComponent } from './dealers.component';
import { DealersService } from '../service/dealers.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { AppRoutingModule } from '../app-routing.module';

describe('DealersComponent', () => {
  let component: DealersComponent;
  let fixture: ComponentFixture<DealersComponent>;
  let loader: HarnessLoader;                        //To encapsulate and test Angular Material components

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealersComponent],
      imports: [
        HttpClientModule,
        AppRoutingModule,
        MaterialDesignModule
      ],
      providers: [DealersService]
    });
    fixture = TestBed.createComponent(DealersComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be elements in the dealers table', async () => {
    const table = await loader.getHarness<MatTableHarness>(MatTableHarness);
    const rows = await table.getRows();
    expect(rows.length).toBeGreaterThan(0);
  })

  it('should be able to get the column name of a cell', async () => {
    const table = await loader.getHarness<MatTableHarness>(MatTableHarness);
    const fifthRow = (await table.getRows())[1];
    const cells = await fifthRow.getCells();
    const cellColumnNames = await parallel(() => cells.map(cell => cell.getColumnName()));
    expect(cellColumnNames).toEqual(['bac', 'brand', 'name', 'country', 'state', 'city']);
  });
});
