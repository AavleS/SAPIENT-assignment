import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LaunchService } from 'src/app/launch.service'

@Component({
  selector: 'app-space-list',
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.css']
})
export class SpaceListComponent implements OnInit {
  totalLaunchList = [];
  @ViewChild('activeBtn')activeBtn: ElementRef;
  listOfyears = [
    { "year": 2006 },
    { "year": 2007 },
    { "year": 2008 },
    { "year": 2009 },
    { "year": 2010 },
    { "year": 2011 },
    { "year": 2012 },
    { "year": 2013 },
    { "year": 2014 },
    { "year": 2015 },
    { "year": 2016 },
    { "year": 2017 },
    { "year": 2018 },
    { "year": 2019 },
    { "year": 2020 },
  ]
  lauchesStatus = [{ "status": "true" }, { "status": "false" }]
  landingStatus = [{ "status": "true" }, { "status": "false" }]
  missionIds = new Map<String, String>();
  launchIndex: any;
  landingIndex: any;
  landing: any;
  launch_year: any;
  launch: any;
  year: any;
  dataNotfound = false
  yearFlag = false;
  constructor(private LaunchService: LaunchService) {

  }

  ngOnInit() {

    this.default()
  }
  default() {
    this.LaunchService.getAllLaunchesList()
      .subscribe(res => {
        this.totalLaunchList = res
        console.log(this.totalLaunchList)
        if(this.totalLaunchList.length==0){
          this.dataNotfound = true;
        }
        else{
          this.dataNotfound = false;
          
        }
        this.missionIds.set(res.mission_id, res.mission_id)
      })
  }
  lastClickedIndex;
  yearFilter(i, year) {
    this.launch_year = year
    this.lastClickedIndex = i;
    this.LaunchService.filtersYear = this.launch_year
    this.default()
    this.yearFlag = true

  }
  statusLaunch(i, status) {
    this.launch = status
    this.launchIndex = i;
    // console.log("launchIndex", status)
    this.LaunchService.launchs = this.launch
    this.default()
  }
  statusLanding(i, status) {
    this.landing = status
    this.landingIndex = i
    this.LaunchService.landing = this.landing
    this.default()
  }
  getMissionid(ids) {
    return Array.from(ids.keys())
  }


}
