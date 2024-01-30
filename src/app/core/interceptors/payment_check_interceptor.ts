import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export class PaymentCheckInterCeptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const modifiedReq = req.clone();
        // Intercept the response
        return next.handle(modifiedReq).pipe((response) => {
            if (response instanceof HttpResponse) {
                console.log(response.url)
                if(!response.url) return response;
         
                const midQueryParam = response.url.split('?')[1]?.split('&').find(param => param.startsWith('mtid='));

                if (midQueryParam) {
                    console.log('Response contains "mtid" query parameter:', midQueryParam);
                    // You can add your logic here based on the presence of 'mid'
                }
            }

            return response;
        });
    }

}