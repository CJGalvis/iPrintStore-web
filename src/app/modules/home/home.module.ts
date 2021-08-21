import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [LandingComponent, AboutUsComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
