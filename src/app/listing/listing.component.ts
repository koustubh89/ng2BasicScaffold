import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { HackerNewsService } from '../shared/hacker-news.service';
import { WindowRef } from '../shared/window-service';

import { Post } from '../shared/post.interface';

@Component({
  selector: 'app-hn-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [HackerNewsService, WindowRef]
})
export class ListingComponent implements OnInit {
  posts: Post[];
  showTabularView: boolean;


  constructor(private _hackerNewsService: HackerNewsService,
    private winRef: WindowRef
  ) {
    this.showTabularView = true;
  }

  ngOnInit() {
    this.getPosts();
  }

  changeView() {
    this.showTabularView = !this.showTabularView;
    if (!this.showTabularView) {
      this.getPosts();
    }
  }

  getPosts() {
    const largeDataJson = false;
    this._hackerNewsService
      .getFeed('comments', largeDataJson)
      .subscribe(
        posts => (this.posts = posts)
      );
      console.log(this.posts);
  }

  upvotedNews() {
    console.log('upvoted');
  }
}
