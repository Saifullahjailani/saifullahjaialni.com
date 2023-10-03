import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../interfaces/education';
import { NgClass, NgFor } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';

@Component({
    selector: 'app-education-modal',
    templateUrl: './education-modal.component.html',
    styleUrls: ['./education-modal.component.scss'],
    standalone: true,
    imports: [LayoutComponent, NgClass, NgFor]
})
export class EducationModalComponent {
  @Input() education: Education | undefined

}
