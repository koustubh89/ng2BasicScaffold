import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { HackerNewsService } from '../shared/hacker-news.service';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
    selector: 'app-grid-view',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
    private gridView: GridDataResult;
    private gridData: any;
    private items: any[] = [];
    public skip: number;
    public pageSize = 10;
    public users: any[] = [];
    public sort: SortDescriptor[] = [];

    constructor(private _hackerNewsService: HackerNewsService) {
        console.log('reaching listing');
    }

    ngOnInit() {
        this.getGridData();
    }

    getGridData() {
        const largeDataJson = true;
        this._hackerNewsService
        .getFeed('users', largeDataJson)
        .subscribe(
            users => {
                this.gridData = orderBy(users, this.sort);
                // this.gridData = {
                //     data: orderBy(this.users, this.sort),
                //     total: this.users.length
                // }
            }
        );
    }

    deleteRecord() {
        console.log('trying to delete');
    }

    pageChange(event: any): void {
        this.skip = event.skip;
        this.loadItems();
    }

    loadItems(): void {
        this.gridView = {
            data: this.users.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        };
    }

    public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.getGridData();
    }
}
