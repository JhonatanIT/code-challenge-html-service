import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DealersService } from '../service/dealers.service';

export interface PeriodicElement {
  bac: string;
  brand: string;
  name: string;
  country: string;
  state: string;
  city: string
}

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css']
})
export class DealersComponent {

  columns = [
    {
      columnDef: 'bac',
      header: 'BAC',
      cell: (element: PeriodicElement) => `${element.bac}`,
    },
    {
      columnDef: 'brand',
      header: 'Brand',
      cell: (element: PeriodicElement) => `${element.brand}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: PeriodicElement) => `${element.name}`,
    },
    {
      columnDef: 'country',
      header: 'Country',
      cell: (element: PeriodicElement) => `${element.country}`,
    },
    {
      columnDef: 'state',
      header: 'State',
      cell: (element: PeriodicElement) => `${element.state}`,
    },
    {
      columnDef: 'city',
      header: 'City',
      cell: (element: PeriodicElement) => `${element.city}`,
    }
  ];

  dataSource = this.dealersService.getDealers();
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(private router: Router, private dealersService: DealersService) { }

  viewVehicles(row: any) {
    this.router.navigate(['/vehicles/' + row.bac]);
  }
}
