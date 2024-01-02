import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'addPriceTag'
})

export class CustomPricePipe implements PipeTransform {
    transform(value: number, ...args: any[]) {
        return `Rs.${value}`
    }
}