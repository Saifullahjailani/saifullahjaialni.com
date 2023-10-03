import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user';
import { NavElementComponent } from './nav-element/nav-element.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    standalone: true,
    imports: [
        NgClass,
        NgFor,
        NavElementComponent,
    ],
})
export class NavBarComponent {
  elemList: string[] = [
    'Experience',
    'Education',
    'Projects',
    'Skills',
  ];


}


