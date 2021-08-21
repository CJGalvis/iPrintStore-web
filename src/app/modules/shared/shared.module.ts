import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalInformationComponent } from './components/modal-information/modal-information.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ModalInformationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
