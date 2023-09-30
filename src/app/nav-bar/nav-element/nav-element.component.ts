import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router, NavigationEnd, Scroll } from '@angular/router';
import { eventListeners } from '@popperjs/core';



@Component({
  selector: 'app-nav-element',
  templateUrl: './nav-element.component.html',
  styleUrls: ['./nav-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavElementComponent implements OnInit {
  @Input() hovered: boolean = false;
  @Input() clicked: boolean = false;
  @Input() label: string = 'no label given';


  constructor(private router: Router) { }
  link: string = '#';


  hover() {
    this.hovered = true;
  }

  unHover() {
    this.hovered = false;
  }

  nav_to() {
    document.getElementById(this.label.toLowerCase())?.scrollIntoView();
  }

  ngOnInit(): void {
    this.link += this.label.toLocaleLowerCase();
  }
}
