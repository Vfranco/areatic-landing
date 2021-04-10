import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';

import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		LandingComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		LayoutModule,
		SharedModule
	],
	exports: [
		LandingComponent,
		FooterComponent
	]
})

export class HomeModule { }
