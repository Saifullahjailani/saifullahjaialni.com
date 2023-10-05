import { Injectable, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService implements OnInit {

  constructor() { }

  private active: string | undefined

  private elemList: string[] = [
    'Experience',
    'Education',
    'Projects',
    'Skills',
  ];

  setActive(label: string): void {
    this.active = label
  }

  getActive() {
    return this.active
  }

  getElem() {
    return this.elemList;
  }

  ngOnInit(): void {
    this.setActive(this.elemList[0]);
  }
}


