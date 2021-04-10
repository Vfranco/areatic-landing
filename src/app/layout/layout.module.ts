import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { SectionWelcomeComponent } from './section-welcome/section-welcome.component';
import { SectionOurtechsComponent } from './section-ourtechs/section-ourtechs.component';
import { SectionProjectsComponent } from './section-projects/section-projects.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { SectionStaffComponent } from './section-staff/section-staff.component';
import { SectionGalleryComponent } from './section-gallery/section-gallery.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';

@NgModule({
	declarations: [
		HeaderComponent, 
		SectionWelcomeComponent, 
		SectionOurtechsComponent, 
		SectionProjectsComponent, 
		SectionServicesComponent, 
		SectionStaffComponent, 
		SectionGalleryComponent,
		SectionSkillsComponent
	],
	imports: [
		CommonModule,
		SharedModule
	],
	exports: [
		HeaderComponent, 
		SectionWelcomeComponent, 
		SectionOurtechsComponent, 
		SectionProjectsComponent, 
		SectionServicesComponent, 
		SectionStaffComponent, 
		SectionGalleryComponent,
		SectionSkillsComponent
	]
})

export class LayoutModule { }
