import { Injectable, Pipe } from '@angular/core';
@Pipe({
   name: 'keyvalue'
})
@Injectable()
export class Keyvalue {

transform(value, args:string[]):any {
    let keys = [];
    for (let key in value) {
        keys.push({key: key, value: value[key]});
    }
    return keys;
}}