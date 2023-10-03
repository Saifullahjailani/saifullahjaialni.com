import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-skill-box',
    templateUrl: './skill-box.component.html',
    styleUrls: ['./skill-box.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class SkillBoxComponent {
  @Input() skill: string | undefined
}
