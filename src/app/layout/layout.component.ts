import { Component, Input } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { LinkComponent } from './link/link.component';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [NgClass, NgIf, LinkComponent, NgFor]
})
export class LayoutComponent {
  @Input() name?: string
  @Input() link?: string
  @Input() role?: string
  @Input() major?: string
  @Input() graduation_date?: string
  @Input() attachments?: string[]

  navigate() {
    if (this.link) {
      window.open(this.link, "_blank")
    }


  }
}



