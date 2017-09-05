import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { HackerNewsService } from '../shared/hacker-news.service';


import { Post } from '../shared/post.interface';

@Component({
  selector: 'app-hn-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [HackerNewsService]
})
export class ListingComponent implements OnInit {
  posts: Post[];

  constructor(private _hackerNewsService: HackerNewsService) {
    console.log('reaching listing');
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this._hackerNewsService
      .getFeed('news')
      .subscribe(
        posts => (this.posts = posts)
      );
      console.log(this.posts);

  }

  upvotedNews() {
    console.log('upvoted');
  }
}
