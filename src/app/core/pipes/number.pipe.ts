import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "numberFormat"
})
export class NumberPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return value.toFixed(2);
    }
}