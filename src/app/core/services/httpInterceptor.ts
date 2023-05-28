import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const newReq = req.clone({
      params: (req.params ? req.params : new HttpParams())
                 .set('access_key', environment.fixerKey)
    });

    return next.handle(newReq);
  }
}