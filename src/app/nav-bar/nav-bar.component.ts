import { Component, Input, OnInit } from '@angular/core';
import { NavElementComponent } from './nav-element/nav-element.component';
import { NgClass, NgFor } from '@angular/common';
import { NavServiceService } from './nav-service.service';

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
export class NavBarComponent implements OnInit {

  constructor(private navService: NavServiceService) { }
  elemList: string[] | undefined

  ngOnInit(): void {
    this.elemList = this.navService.getElem();
  }

}


