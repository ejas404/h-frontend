import { Pipe, PipeTransform } from "@angular/core";
import { environment } from "environments/environment";

const SERVER_URL = environment.SERVER_URL
const production = environment.production

@Pipe({
    name : 'customImageUrl'
})

export class CustomImageUrlPipe implements PipeTransform{
    transform(value: string | undefined) {
        if(typeof(value) === 'string'){
            if (production === true) {
                return `${value.slice(11)}`
            }
            return `${SERVER_URL}/${value.slice(11)}`
        }

        return '../../../../assets/fixed/depositphotos_132018592-stock-photo-online-courses-concept-with-hand.jpg'
    }
}