import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  standalone: true,
  imports: [NgClass, NgIf]
})
export class LinkComponent {
  @Input() link: string | undefined
  @Input() isWeb: boolean = true


  getDomainName(link: string) {
    try {
      const url = new URL(link);
      return url.host;
    } catch (e) {
      return "Invalid"
    }
  }
}
