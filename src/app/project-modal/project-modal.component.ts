import { Component, Input } from '@angular/core';
import { Projects } from '../interfaces/projects';
import { SkillBoxComponent } from '../experience-modal/skill-box/skill-box.component';
import { NgClass, NgFor } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';

@Component({
    selector: 'app-project-modal',
    templateUrl: './project-modal.component.html',
    styleUrls: ['./project-modal.component.scss'],
    standalone: true,
    imports: [LayoutComponent, NgClass, NgFor, SkillBoxComponent]
})
export class ProjectModalComponent {
  @Input() projects: Projects | undefined

}
