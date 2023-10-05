import { Component, OnInit, HostListener, ElementRef, Host, AfterViewInit } from '@angular/core';
import { MyHttpService } from './my-http.service';
import { User } from './interfaces/user';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: User | undefined = undefined
  constructor(private httpService: MyHttpService, private metaService: Meta, private titleService: Title, private el: ElementRef) {

  }



  ngOnInit(): void {
    this.httpService.get().subscribe(
      (user) => {
        this.user = user
        this.titleService.setTitle(this.user?.name ?? 'No Title');
        this.metaService.addTag({ name: 'description', content: this.user?.summary ?? 'No Description' })
        this.metaService.addTag({ name: 'keywords', content: this.user.keywords ?? '' })
      }
    )

      ;

  }

}
