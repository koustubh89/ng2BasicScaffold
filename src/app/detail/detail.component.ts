import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { HackerNewsService } from '../shared/hacker-news.service';
import { Post } from '../shared/post.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hn-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [HackerNewsService]
})
export class AppDetailComponent implements OnInit {

  private sub: any;
  posts: Post[];
  id: number;

  constructor(
    private route: ActivatedRoute,
    private _hackerNewsService: HackerNewsService,
  ) {
    console.log('reaching app details component');
    console.log('constructor => this.id', this.id);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       console.log('onInit => this.id', this.id);
    });
  }
}
