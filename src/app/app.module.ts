import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavElementComponent } from './nav-bar/nav-element/nav-element.component';
import { ExperienceModalComponent } from './experience-modal/experience-modal.component';
import { SkillBoxComponent } from './experience-modal/skill-box/skill-box.component';
import { EducationModalComponent } from './education-modal/education-modal.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { SkillsModalComponent } from './skills-modal/skills-modal.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        NavBarComponent,
        NavElementComponent,
        ExperienceModalComponent,
        SkillBoxComponent,
        EducationModalComponent,
        ProjectModalComponent,
        SkillsModalComponent,
        LayoutComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
