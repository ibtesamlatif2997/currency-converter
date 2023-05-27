import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

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

        return null;
    }

    async getRates(date="latest"){
        let historicData:any = {};
        if(localStorage.getItem("historic")){
            historicData = JSON.parse(localStorage.getItem("historic") || '{}');
        }

        if(date !== 'latest' && historicData[date]){
            return historicData[date];
        }

        const response = this.http.get(`${this.apiUrl}/${date}`);
        const res: any = await lastValueFrom(response);

        if(res && res.success){
            historicData[res.date] = res.rates;
            localStorage.setItem("historic", JSON.stringify(historicData))
            return res.rates;
        }

        return null;
    }

    async getHistoricData(){
        let historicData:any = {};

        if(localStorage.getItem("historic")){
            historicData = JSON.parse(localStorage.getItem("historic") || '{}');
        }

        return historicData;
    }
}