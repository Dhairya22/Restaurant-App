import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Injectable({
    providedIn: 'root'
})
export class ListRestaurantResolverService implements Resolve<any> {

    constructor(
        private commonService: CommonService
    ) { }

    resolve() {

        let restrauList = {
            list: this.commonService.getRestrauList()
        }

        return restrauList;
    }
}
