import { Component, OnInit } from '@angular/core';
import {EmpService} from './service/emp-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private empService:EmpService){}
  serviceName:string;
  ngOnInit():void{
    this.serviceName=this.empService.myName;
    this.empService.printName();
  }
  title = 'first-angular-app';

}
