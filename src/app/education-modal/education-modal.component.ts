import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../interfaces/education';

@Component({
  selector: 'app-education-modal',
  templateUrl: './education-modal.component.html',
  styleUrls: ['./education-modal.component.scss']
})
export class EducationModalComponent {
  @Input() education: Education | undefined

}
