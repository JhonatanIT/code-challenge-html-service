import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  bac: string = '';

  vehicles = [
    {
      "bac": "122345",
      "stockNumber": "12345",
      "vin": "VIN00000000000000",
      "ctpStatus": "IN-SERVICE",
      "onstarStatus": "ONS-116",
      "createdAt": "21/09/2018",
      "color": "Black",
      "year": 2018
    },
    {
      "bac": "122345",
      "stockNumber": "12345",
      "vin": "VIN00000000000000",
      "ctpStatus": "IN-SERVICE",
      "onstarStatus": "ONS-116",
      "createdAt": "21/09/2018",
      "color": "Black",
      "year": 2018
    },
    {
      "bac": "122345",
      "stockNumber": "12345",
      "vin": "VIN00000000000000",
      "ctpStatus": "IN-SERVICE",
      "onstarStatus": "ONS-116",
      "createdAt": "21/09/2018",
      "color": "Black",
      "year": 2018
    },
    {
      "bac": "122345",
      "stockNumber": "12345",
      "vin": "VIN00000000000000",
      "ctpStatus": "IN-SERVICE",
      "onstarStatus": "ONS-116",
      "createdAt": "21/09/2018",
      "color": "Black",
      "year": 2018
    },
    {
      "bac": "122345",
      "stockNumber": "12345",
      "vin": "VIN00000000000000",
      "ctpStatus": "IN-SERVICE",
      "onstarStatus": "ONS-116",
      "createdAt": "21/09/2018",
      "color": "Black",
      "year": 2018
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.bac = param['bac'];
    })
  }

}
