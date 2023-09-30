import { Component, Input } from '@angular/core';
import { Projects } from '../interfaces/projects';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
  @Input() projects: Projects | undefined

}
