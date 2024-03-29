import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable} from "rxjs";
import { Injectable } from "@angular/core";
import { delay, finalize } from "rxjs/operators";
import { BusyService } from "../services/busy.service";

@Injectable()
export class Loadinginterceptor implements HttpInterceptor{

    constructor(private busyService:BusyService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.busyService.busy();
        return next.handle(req).pipe(
            delay(500),
            finalize(() => {
                this.busyService.idle()
            })
        )
    }
    
}