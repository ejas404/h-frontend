import { Pipe, PipeTransform } from "@angular/core";
import { BASE_URL } from "../../core/constant/uri";

@Pipe({
    name : 'customImageUrl'
})

export class CustomImageUrl implements PipeTransform{
    transform(value: string | undefined, ...args: any[]) {
        if(typeof(value) === 'string'){
            return `${BASE_URL}/${value.slice(7)}`
        }

        return '../../../../assets/fixed/depositphotos_132018592-stock-photo-online-courses-concept-with-hand.jpg'
    }
}