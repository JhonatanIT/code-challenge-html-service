import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class DealersService {

  baseURL: string = "https://9tjf6hha91.execute-api.us-west-2.amazonaws.com/dealers";

  constructor(private http: HttpClient) { }

  getDealers(): Observable<any> {
    return this.http.get(this.baseURL);
  }

}
