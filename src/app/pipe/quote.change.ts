import { Pipe, PipeTransform } from '@angular/core';
import {Quote} from "../service/finance/quote.service";

@Pipe({name: 'quoteChange'})
export class QuoteChangePipe implements PipeTransform {
    transform(value:Quote): string {
        return ((value.getChange())*100/value.open).toFixed(2) + "%";
    }
}