import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { NavServiceService } from '../nav-service.service';



@Component({
  selector: 'app-nav-element',
  templateUrl: './nav-element.component.html',
  styleUrls: ['./nav-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgClass, NgIf],
})
export class NavElementComponent implements OnInit {
  @Input() hovered: boolean = false;
  @Input() clicked: boolean = false;
  @Input() label: string = 'no label given';

  constructor(private navService: NavServiceService) { }
  link: string = '#';


  hover() {
    this.hovered = true;
  }

  unHover() {
    this.hovered = false;
  }

  nav_to() {
    this.navService.setActive(this.label)
    document.getElementById(this.label.toLowerCase())?.scrollIntoView();
  }

  ngOnInit(): void {
    this.link += this.label.toLocaleLowerCase();
    if (this.navService.getActive() == this.label) {
      this.clicked = true;
    }
  }
}
