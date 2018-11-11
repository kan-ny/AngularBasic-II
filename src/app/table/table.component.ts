import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
 
})
export class TableComponent implements OnInit {

  constructor() { }

 
 
  ngOnInit() {

  }

  
  @Input() 
    set newRecord(record: any){
      if( record != null){
        this.tableArray.push(record);
      }
    }

    filterObj = {value: '',col: ''};
    setFilter(val1, val2){
      this.filterObj.value = val1;
      this.filterObj.col = val2;
      console.log(this.filterObj.value, this.filterObj.col)
    } 
    filterId: string;
    filterName: string;
    filterDep: string;
    filterSal: string;
show(){
  console.log('input 1',this.tableArray, this.filterId, this.filterName, this.filterDep, this.filterSal);
  

}


tableArray: any[] = [
  {
    'id': '1',
    'name':'dfgdfgert',
    'salary':'98',
    'dep': 'jkliop' 
  },
  {
    'id':'2',
    'name': 'pqtydxf',
    'salary': '768678435',
    'dep':'gyhntyhn'  
  },{
    'id':'3',
    'name': 'ukinkui',
    'salary': '768678',
    'dep': 'dfgdrgjkl'  
  },{
    'id': '43',
    'name': 'dfgdfg',
    'salary': '809890',
    'dep': 'fghfgh'  
  },{
    'id': '456',
    'name': 'jynynu',
    'salary': '895',
    'dep': 'fghfgh'  
  },{
    'id': '789',
    'name': 'dfjggh',
    'salary': '87978',
    'dep': 'dfgdfgh'  
  },{
    'id': '789',
    'name': 'asd',
    'salary': '345',
    'dep': 'asdasdfgh'  
  }
];

delete(i){
  this.tableArray.splice(i,1);
}

sortNumbers(column: string): void{
  this.tableArray.sort(function (a,b){
    return a[column]-b[column];
  })
  }

  sortStings(column:string ){
    this.tableArray.sort(function (a,b){
      let val1 = a[column].toUpperCase();

      let val2 = b[column].toUpperCase();
       
      if(val1 < val2){
        return -1;
      }
      if(val1 > val2){
        return 1;
      }
return 0;
    })
  }


  _updateIndex: number
  set updateIndex(i){
    this._updateIndex = i;
  }
  get updateIndex(): number{
    return this._updateIndex;
  }

  fromChild(event){

    console.log('update -> table',event)
    this.tableArray[event.index]['id'] = event.id;
    this.tableArray[event.index]['name'] = event.name;
    this.tableArray[event.index]['salary'] = event.salary;
    this.tableArray[event.index]['dep'] = event.dep;
  }

}
