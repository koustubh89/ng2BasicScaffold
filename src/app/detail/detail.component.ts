import * as _ from 'lodash';
import { uib } from 'angular-bootstrap/ui-bootstrap-tpls.min';
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
  post: Post;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private _hackerNewsService: HackerNewsService,
  ) {
    console.log('reaching app details component');
    this.getPosts();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       console.log('onInit => this.id', this.id);
      });
  }

  getPosts() {
    this._hackerNewsService
    .getFeed('news', false)
    .subscribe(posts => {
      this.posts = posts;
      this.mapPosts();
    });
  }

  mapPosts() {
    const idx = _.findIndex(this.posts, {id: this.id});
    if (idx > -1) {
      this.post = this.posts[idx];
    }
  }
}
