import { Component, Input } from '@angular/core';
import { Experience } from '../interfaces/experience';

@Component({
  selector: 'app-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrls: ['./experience-modal.component.scss']
})
export class ExperienceModalComponent {
  @Input() experience: Experience | undefined;
  navigate(): void {
    if (this.experience?.company_web)
      window.open(this.experience?.company_web)
  }
}
