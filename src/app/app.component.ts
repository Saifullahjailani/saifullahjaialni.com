import { Component, OnInit } from '@angular/core';
import { MyHttpService } from './my-http.service';
import { User } from './interfaces/user';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sj_web';
  user: User | undefined = undefined

  constructor(private httpService: MyHttpService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.get().subscribe(
      (user) => {
        this.user = user
      }
    )

    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      document.getElementById(event.url.substring(2))?.scrollIntoView();
    })

  }



}
