import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(private http: HttpClient) { }
  
  public filtersYear
  public launchs
  public landing

  private allLaunchesUrl = 'https://api.spaceXdata.com/v3/launches?limit=100'

  getAllLaunchesList() {
    if (this.filtersYear != undefined && this.launchs == undefined && this.landing == undefined) {
      // alert("hi")
      return this.http.get<any>(this.allLaunchesUrl + "&launch_year=" + this.filtersYear)
    }
    else if (this.filtersYear != undefined && this.launchs != undefined && this.landing == undefined) {
      return this.http.get<any>(this.allLaunchesUrl + "&launch_year=" + this.filtersYear + "&launch_success=" + this.launchs)
    }
    else if (this.filtersYear != undefined && this.launchs != undefined && this.landing != undefined) {
      return this.http.get<any>(this.allLaunchesUrl + "&launch_year=" + this.filtersYear + "&launch_success=" + this.launchs + "&land_success=" + this.landing)

    }
    return this.http.get<any>(this.allLaunchesUrl)
  }
}
