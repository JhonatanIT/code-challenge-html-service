import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class VehiclesService {

  baseURL: string = "https://9tjf6hha91.execute-api.us-west-2.amazonaws.com/vehicles/";

  constructor(private http: HttpClient) { }

  getVehiclesByBac(bac: string): Observable<any> {
    return this.http.get(this.baseURL + bac);
  }

}
