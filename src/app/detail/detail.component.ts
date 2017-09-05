import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { HackerNewsService } from '../shared/hacker-news.service';
import { Post } from '../shared/post.interface';

@Component({
  selector: 'app-hn-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [HackerNewsService]
})
export class AppDetailComponent {
  posts: Post[];

  constructor(private _hackerNewsService: HackerNewsService) {
    console.log('reaching app details component');
  }

}
