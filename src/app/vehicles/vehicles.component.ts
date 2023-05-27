import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { VehiclesService } from '../service/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  bac: string = '';
  vehicles: any;
  spinnerActivated: boolean = true;

  constructor(private route: ActivatedRoute, private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.bac = param['bac'];
      this.vehiclesService.getVehiclesByBac(this.bac)
        .subscribe({
          next: (res) => {
            this.vehicles = res;
            this.spinnerActivated = false;
          },
          error: (e) => {
            this.vehicles = undefined;
            this.spinnerActivated = false;
          }
        })
    })
  }

}
