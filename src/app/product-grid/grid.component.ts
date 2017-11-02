import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { HackerNewsService } from '../shared/hacker-news.service';

@Component({
    selector: 'app-grid-view',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
    private gridData: any;

    constructor(private _hackerNewsService: HackerNewsService) {
        console.log('reaching listing');
    }

    ngOnInit() {
        this.getGridData();
    }

    getGridData() {
        this._hackerNewsService
        .getFeed('users')
        .subscribe(
            users => (this.gridData = users)
        );
        console.log(this.gridData);
    }
}
