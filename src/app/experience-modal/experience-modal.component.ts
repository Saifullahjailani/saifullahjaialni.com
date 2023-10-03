import { Component, Input } from '@angular/core';
import { Experience } from '../interfaces/experience';
import { SkillBoxComponent } from './skill-box/skill-box.component';
import { NgClass, NgFor } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';

@Component({
    selector: 'app-experience-modal',
    templateUrl: './experience-modal.component.html',
    styleUrls: ['./experience-modal.component.scss'],
    standalone: true,
    imports: [LayoutComponent, NgClass, NgFor, SkillBoxComponent]
})
export class ExperienceModalComponent {
  @Input() experience: Experience | undefined;
  navigate(): void {
    if (this.experience?.company_web)
      window.open(this.experience?.company_web)
  }
}
