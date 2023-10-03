import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: true,
    imports: [NgClass, NgIf]
})
export class LayoutComponent {
  @Input() name?: string
  @Input() link?: string
  @Input() role?: string
  @Input() major?: string
  @Input() graduation_date?: string


  navigate() {
    if (this.link) {
      window.open(this.link, "_blank")
    }


  }
}
