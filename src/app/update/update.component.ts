import { Component, OnInit } from '@angular/core';


import { Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Output()  updatedRec:   EventEmitter<any>  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateObj: any;



uid: string;
uname : string;
usalary: string;
udep: string;

UpdateRecord(){
   let obj = {
     id:  this.uid,
     name:  this.uname,
     salary: this.usalary,
     dep: this.udep,
     index: this.index
   };

    console.log('before Emit', obj);
  this.updatedRec.emit(obj);

}


  @Input() 
  set updateRecord(record: any){
    if(record != null){
      console.log(record);
      this.uid = record.id;
      this.uname = record.name;
      this.usalary = record.salary;
      this.udep = record.dep;
          this.updateObj = record;
    }
  } 

  showUpdateObj(){
    console.log('Update Obj',this.updateObj, this.index);
  }


  @Input('indexPos') index: number;

}
