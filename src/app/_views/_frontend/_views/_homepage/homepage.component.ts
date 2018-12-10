import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChangeHeaderBgService } from './../../_shared/_services/_change-header-bg/change-header-bg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  constructor(private _title: Title, private _router: Router, private _changeHeaderBgService: ChangeHeaderBgService) { }

  ngOnInit() {
    this._title.setTitle(`UIDHTML: Homepage [Free script, Dynamic script, Javascript, Javascript plugin,
      Jquery plugin, CSS, CSS3, Html ,Html5, tutorial videos]`);
    const elems = document.querySelector('.col');
    // setTimeout(() => {elems.classList.add('active'); }, 500);
    const outerCircle = document.getElementsByClassName('outerCircle')[0];
    const ringCircle = document.getElementsByClassName('ringCircle')[0];
    const pointer = document.getElementsByClassName('pointer')[0];
    const outerCircle_half_w = outerCircle.clientWidth / 2 + 2;
    const outerCircle_half_h = outerCircle.clientHeight / 2 + 2;
    const pointer_half_w = pointer.clientWidth / 2;
    const pointer_half_h = pointer.clientHeight / 2;
    const self = this;
    document.addEventListener('mousemove', function(e) {
      self.mouseMovent(e, outerCircle, ringCircle, pointer, outerCircle_half_w, outerCircle_half_h, pointer_half_w, pointer_half_h)
    });
  }

  ngAfterViewInit() {
    this._changeHeaderBgService.headerBg.next('#151018');
  }

  mouseMovent(e, outerCircle, ringCircle, pointer, outerCircle_half_w, outerCircle_half_h, pointer_half_w, pointer_half_h) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    outerCircle.style.transform = 'translate(' + (mouseX - outerCircle_half_w + 40) + 'px,' + (mouseY - outerCircle_half_h + 40) + 'px)';
    ringCircle.style.transform = 'translate(' + (mouseX - outerCircle_half_w + 45) + 'px,' + (mouseY - outerCircle_half_h + 45) + 'px)';
    pointer.style.transform = 'translate(' + (mouseX - pointer_half_w + 40) + 'px,' + (mouseY - pointer_half_h + 40) + 'px)';
  }

  mouseEnterOnCol(e) {
    const elems = document.querySelectorAll('.col');
    [].forEach.call(elems, function (el) {
      el.classList.remove('active');
    });
    e.target.classList.add('active');
  }

  navigatePage($event, pageName) {
    if (pageName === 'examplesPage') {
      this._router.navigate(['/all-examples']);
    } else if (pageName === 'tutorialsPage') {
      this._router.navigate(['/tutorials', '']);
    }
  }
}
