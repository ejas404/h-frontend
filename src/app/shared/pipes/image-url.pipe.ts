import { Pipe, PipeTransform } from "@angular/core";
import { BASE_URL } from "../../core/constant/uri";

@Pipe({
    name : 'customImageUrl'
})

export class CustomImageUrlPipe implements PipeTransform{
    transform(value: string | undefined, ...args: any[]) {
        if(typeof(value) === 'string'){
            return `${BASE_URL}/${value.slice(11)}`
        }

        return '../../../../assets/fixed/depositphotos_132018592-stock-photo-online-courses-concept-with-hand.jpg'
    }
}