import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  elemList: string[] = [
    'Experience',
    'Education',
    'Projects',
    'Skills',
  ];


}


