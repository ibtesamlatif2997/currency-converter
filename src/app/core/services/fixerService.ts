import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { interval, take, lastValueFrom } from 'rxjs';

type Symbols = {
    success: boolean,
    symbols: any
};

@Injectable()
export class FixerService{
    private apiUrl = environment.fixerAPI;

    constructor(
        private http: HttpClient
    ){}

    async getCurrencies(){
        const currencies = localStorage.getItem("currencies");

        if(currencies){
            return JSON.parse(currencies);
        }
        else{
            const response = this.http.get(`${this.apiUrl}/symbols`);
            const res: any = await lastValueFrom(response);
            
            if(res && res.success){
                localStorage.setItem("currencies", JSON.stringify(res.symbols))
                return res.symbols;
            }
        }
    }
}