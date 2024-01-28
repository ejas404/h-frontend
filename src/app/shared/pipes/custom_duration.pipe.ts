import { Pipe, PipeTransform } from "@angular/core";
import { checkDecimal } from "app/core/utils/check_decimal";

@Pipe({
    name : 'customDuration'
})

export class CustomDurationPipe implements PipeTransform{
    transform(value: any) {
        if(Number(value) <= 59){
            return `${value} s`
        }else if(Number(value) > 59 && Number(value) < 3600){
            return `${checkDecimal(Number(value)/60)} mins`
        }else{
            return `${checkDecimal(Number(value)/(60*60))} hrs`
        }
    }

}