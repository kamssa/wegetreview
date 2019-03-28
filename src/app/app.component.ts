import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router){}


  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      let scrollToTop = window.setInterval(function () {
        let pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, 0);
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    });

  }
}
