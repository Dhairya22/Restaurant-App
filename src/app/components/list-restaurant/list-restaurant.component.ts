import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-list-restaurant',
    templateUrl: './list-restaurant.component.html',
    styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

    restrauList: any;

    constructor(
        private commonService: CommonService,
        private router: Router,
        private aRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {

        this.commonService.isLoader();

        this.aRoute.data.subscribe( (response: any) => {
            response.data.list.subscribe( result => {
                this.restrauList = result;
            })
        })
    }

    updateRestrauList() {
        this.commonService.getRestrauList().subscribe(res => {
            console.log("🚀 ~ file: list-restaurant.component.ts ~ line 29 ~ ListRestaurantComponent ~ this.commonService.getRestrauList ~ res", res)
            this.restrauList = res;
        })
    }

    onRemove(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                this.restrauList.splice(id.id, -1);
                this.commonService.removeRestrauDetails(id).subscribe(el => {
                    console.log("🚀 ~ file: list-restaurant.component.ts ~ line 26 ~ ListRestaurantComponent ~ this.commonService.removeRestrauDetails ~ el", el);
                    this.updateRestrauList();
                })
            }
        })

    }

    addRestrau() {
        this.router.navigate(['add-restaurant']);
    }

}
