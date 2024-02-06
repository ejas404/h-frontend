import { Injectable, inject } from "@angular/core"
import { ConfirmBoxService } from "../services/shared/confirm-dialog"
import { take } from "rxjs"

@Injectable({providedIn : 'root'})

export class ConfirmBoxHelper {

    private confirmService = inject(ConfirmBoxService)

    call(msg: string): Promise<boolean> {
        return new Promise((resolve) => {
            this.confirmService.confirmDialog(msg)
                .pipe(take(1))
                .subscribe({
                    next: res => {
                        resolve(res)
                    }
                })
        })
    }
}