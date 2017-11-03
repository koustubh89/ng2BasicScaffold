import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { HackerNewsService } from '../shared/hacker-news.service';
import { SortDescriptor, orderBy, process, State } from '@progress/kendo-data-query';
import { GridDataResult, PageChangeEvent, DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-grid-view',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
    private gridView: GridDataResult;
    private gridData: any;
    private items: any[] = [];

    private state: State = {
        skip: 0,
        take: 5,

        // Initial filter descriptor
        filter: {
            logic: 'and',
            filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
        }
    };

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
                this.users = users;
            }
        );
    }

    protected dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.gridData = process(this.gridData, this.state);
    }

    deleteRecord() {
        console.log('trying to delete');
    }

    /** Paging implementation
     pageChange(event: any): void {
         this.skip = event.skip;
         this.loadItemsPaging();
        }

    private loadItemsPaging(): void {
        this.gridView = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        };
    }
    */

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
