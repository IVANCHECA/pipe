import  {Pipe, PipeTransform} from "@angular/core";


@Pipe({name:"birthday"})
export class BirthdayPipe  implements PipeTransform{
      transform(value:Date){
          let day = value.getDate();
          let month = value.getMonth();
          let year =  value.getFullYear();
          return year+"/" +(month+1)+"/"+day;
      }
}