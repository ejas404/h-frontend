import { Pipe, PipeTransform } from "@angular/core";
import { environment } from "environments/environment";

const production = environment.production
const SERVER_URL = environment.SERVER_URL

@Pipe({
    name: 'customProfileUrl'
})

export class CustomProfileUrlPipe implements PipeTransform {
    transform(value: string | undefined) {
        if (typeof (value) !== 'string') { return '../../../../assets/student/fixed-images/634682.png' }
        
        if (production === true) {
            return `${value.slice(11)}`
        }
        return `${SERVER_URL}/${value.slice(11)}`
    }
}