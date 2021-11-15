import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListRestaurantResolverService implements Resolve<any> {

    constructor() { }

    resolve(): Observable<any> {
        return null
    }
}
