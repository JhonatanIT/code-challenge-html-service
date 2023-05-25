import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  bac: string;
  brand: string;
  name: string;
  country: string;
  state: string;
  city: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    "bac": "122345",
    "name": "Cadillac Detriot",
    "city": "Detriot",
    "state": "WV",
    "country": "US",
    "brand": "Cadillac"
  },
  {
    "bac": "122346",
    "name": "Buick Detriot",
    "city": "Detriot",
    "state": "WV",
    "country": "US",
    "brand": "Buick"
  },
  {
    "bac": "122347",
    "name": "GMC Detriot",
    "city": "Detriot",
    "state": "WV",
    "country": "US",
    "brand": "GMC"
  },
  {
    "bac": "122348",
    "name": "Buick New York",
    "city": "New York",
    "state": "WV",
    "country": "US",
    "brand": "Buick"
  },

];

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
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(private router: Router) { }
  ngOnInit(): void { }

  viewVehicles(row: any) {
    this.router.navigate(['/vehicles/' + row.bac]);
  }
}
