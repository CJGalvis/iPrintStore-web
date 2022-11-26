import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalInformationComponent } from './components/modal-information/modal-information.component';
import { MaterialModule } from 'src/app/core/interface/material/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NavbarComponent, ModalInformationComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavbarComponent, ModalInformationComponent, MaterialModule, FlexLayoutModule],
})
export class SharedModule {}
