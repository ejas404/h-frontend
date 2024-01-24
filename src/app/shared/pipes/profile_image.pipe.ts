import { Pipe, PipeTransform } from "@angular/core";
import { BASE_URL } from "../../core/constant/uri";

@Pipe({
    name : 'customProfileUrl'
})

export class CustomProfileUrlPipe implements PipeTransform{
    transform(value: string | undefined) {
        if(typeof(value) === 'string'){
            return `${BASE_URL}/${value.slice(11)}`
        }

        return '../../../../assets/student/fixed-images/634682.png'
    }
}