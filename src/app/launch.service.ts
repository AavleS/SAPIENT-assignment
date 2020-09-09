import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(private http: HttpClient) { }

  private allLaunchesUrl = 'https://api.spaceXdata.com/v3/launches?limit=100'
  private successFilterUrl = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success'
  private lauchAndLandUrl = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true'
  private allFilterUrl = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014'

  getAllLaunchesList(){
    return this.http.get<any>(this.allLaunchesUrl)
  }
  getSuccessFilter(){
    return this.http.get<any>(this.successFilterUrl+ "=" + localStorage.getItem('successLaunch'))
  }
  getLaunchAndLand(){
    return this.http.get<any>(this.lauchAndLandUrl+ "=" + localStorage.getItem('lauchAndLandBooleanValue'))

  }
  getAllfilter(){
    return this.http.get<any>(this.allFilterUrl+ "=" + localStorage.getItem('lauchAndLandBooleanValue'))
    
  }
}
