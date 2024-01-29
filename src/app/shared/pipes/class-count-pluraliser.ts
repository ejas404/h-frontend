import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'customPluraliser'
})

export class CustomCountPluraliserPipe implements PipeTransform {
    transform(value: number) : string {
        if(value < 0) return ''
        if(value === 1) return '1 class';
        return `${value} classes`   
    }
    
}