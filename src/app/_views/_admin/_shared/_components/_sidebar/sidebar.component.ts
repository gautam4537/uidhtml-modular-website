import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Keyvalue } from '../../_pipes/get-object-key-value';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public activeTab: string = '';
  private location: any;
  public sideBarLinks: any[] = [
    {

      posts: [
        { text: 'All posts', icon: 'receipt', url: 'posts'},
        { text: 'Add post', icon: 'add_box', url: 'add-post'},
        { text: 'Published post', icon: 'check', url: 'published-posts'},
        { text: 'Unpublished Posts', icon: 'thumb_down_alt', url: 'unpublished-posts'}
      ],
      visitors: [
        { text: 'Users List', icon: 'people', url: 'users'},
        { text: 'All Query', icon: 'grain', url: 'all-queries'},
        { text: 'Recent Query', icon: 'notification_important', url: 'recent-queries'},
        { text: 'Answered', icon: 'check', url: 'answered-queries'},
        { text: 'Pending Query', icon: 'thumb_down_alt', url: 'pending-queries'}
      ],
      videos: [
        { text: 'All videos', icon: 'videocam', url: 'all-youtube-videos'}
      ]
    }
  ];
  constructor(private _router: Router) { }

  ngOnInit() {
  }

}
