import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

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

      links: [
        { text: 'All posts', icon: 'receipt', url: 'posts'},
        { text: 'Add post', icon: 'add_box', url: 'add-post'},
        { text: 'Update post', icon: 'file_copy', url: 'update-post'},
        { text: 'Published post', icon: 'check', url: 'published-posts'},
        { text: 'Unpublished Posts', icon: 'thumb_down_alt', url: 'unpublished-posts'}
      ],
      user: [
        { text: 'Users List', icon: 'people', url: 'users'},
        { text: 'Delete user', icon: 'delete', url: 'delete-user'},
        { text: 'All Query', icon: 'grain', url: 'all-queries'},
        { text: 'Recent Queruy', icon: 'notification_important', url: 'recent-queries'},
        { text: 'Answered', icon: 'check', url: 'answered-queries'},
        { text: 'Pending Query', icon: 'thumb_down_alt', url: 'pending-queries'}
      ],
      videos: [
        { text: 'All videos', icon: 'videocam', url: 'all-youtube-videos'}
      ]
    }
  ];
  constructor(private _router: Router) {
    this._router.events.subscribe((data: any) => { this.location = data.url; });
  }

  ngOnInit() {
    this.activeTab = this.location;
    console.log(this.location);
  }

}
