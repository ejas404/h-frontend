import { Pipe, PipeTransform } from "@angular/core";
import { checkDecimal } from "app/core/utils/check_decimal";

@Pipe({
    name : 'customDuration'
})

export class CustomDurationPipe implements PipeTransform{

    transform(n: number) {

        if(typeof(n) !== 'number') return ''

        if(n <= 59) return `${n} s` ;
        if(n > 59 && n < 3600) return `${checkDecimal(n/60)} mins` ;
        return `${checkDecimal(n/(60*60))} hrs` ;
        
    }

}