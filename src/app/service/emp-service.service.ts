import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }
  public myName:string='employee service';
  printName():void{
    alert(this.myName);
  }
}
