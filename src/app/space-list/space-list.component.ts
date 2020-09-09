import { Component, OnInit } from '@angular/core';
import {LaunchService} from 'src/app/launch.service'

@Component({
  selector: 'app-space-list',
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.css']
})
export class SpaceListComponent implements OnInit {
  totalLaunchList=[];
  years = {}
  listOfyears=[]
  missionIds=new Map<String, String>();
  constructor(private LaunchService :LaunchService ) {
    
   }

  ngOnInit() {
    this.LaunchService.getAllLaunchesList()
    .subscribe(res=>{
      console.log(res)
     this.totalLaunchList = res
     this.missionIds.set(res.mission_id,res.mission_id)
      for(var i=1; i<this.totalLaunchList.length; i++){
        // console.log(this.totalLaunchList[i-1].launch_year)
        if(this.totalLaunchList[i-1].launch_year!=this.totalLaunchList[i].launch_year){
        // console.log(this.totalLaunchList[i].launch_year)
          this.years["year"] = this.totalLaunchList[i-1].launch_year
          this.listOfyears.push(this.years)
          this.years={}
        }

      }
      console.log("Years getting",this.listOfyears)

    //  this.missionIds = res.mis
    })
  }
  getMissionid(ids){
    return Array.from(ids.keys())
  }
  trueLaunch(){
    const btnclicked = 'true'
    localStorage.setItem('successLaunch',btnclicked )
    this.LaunchService.getSuccessFilter()
    .subscribe(res=>{
      console.log("LAUNCH SUCESS APPLIED",res)
      this.totalLaunchList = res
      this.missionIds.set(res.mission_id,res.mission_id)
       for(var i=1; i<this.totalLaunchList.length; i++){
         // console.log(this.totalLaunchList[i-1].launch_year)
         if(this.totalLaunchList[i-1].launch_year!=this.totalLaunchList[i].launch_year){
         // console.log(this.totalLaunchList[i].launch_year)
           this.years["year"] = this.totalLaunchList[i-1].launch_year
           this.listOfyears.push(this.years)
           this.years={}
         }
 
       }
    })
  }
  falseLaunch(){
    const btnclicked = 'false'
    localStorage.setItem('successLaunch',btnclicked )
    this.LaunchService.getSuccessFilter()
    .subscribe(res=>{
      console.log("LAUNCH SUCESS APPLIED",res)
      this.totalLaunchList = res
      this.missionIds.set(res.mission_id,res.mission_id)
       for(var i=1; i<this.totalLaunchList.length; i++){
         // console.log(this.totalLaunchList[i-1].launch_year)
         if(this.totalLaunchList[i-1].launch_year!=this.totalLaunchList[i].launch_year){
         // console.log(this.totalLaunchList[i].launch_year)
           this.years["year"] = this.totalLaunchList[i-1].launch_year
           this.listOfyears.push(this.years)
           this.years={}
         }
 
       }
    })
  }
}
