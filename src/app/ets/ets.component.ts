import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ets',
  templateUrl: './ets.component.html',
  styleUrls: ['./ets.component.css']
})
export class EtsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  id: string;
  name : string;
  salary: string;
  dep: string;



  index: number = 0;

  passRecord: any= null;

  addEmp()
{
  let user = {
    'id': this.id,
    'name': this.name,
    'salary': this.salary,
    'dep': this.dep  
  }
  this.passRecord = user;
   // this.arr.push(user);
console.log( this.passRecord);
}



arr: any[] = [];





}



