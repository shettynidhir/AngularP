import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(diffcat: any, type: string): any {
    if(type=="All")
       return diffcat;

    return diffcat.filter((x:any)=>x.type == type)
  }
  }


