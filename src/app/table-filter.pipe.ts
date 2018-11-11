import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

//   transform(colArray: string[], value: string, col: string): any {
// console.log('InPipe', colArray, value, col);
//     if(!colArray){ return [];  }
//     if(!value){return colArray; }
//     if (value == '' || value == null) return [];
//     return colArray.filter(e=> e[col].toLowerCase().indexOf(value)-1);
    
//   }

transform(items: any[], value: string, label:string): any[] {
  
  if (!items) return [];
  if (!value) return  items;
  if (value == '' || value == null) return [];
  console.log('InPipe', items, value, label)
  return items.filter(e => e[label].toLowerCase().indexOf(value) > -1 );
  
}

}
