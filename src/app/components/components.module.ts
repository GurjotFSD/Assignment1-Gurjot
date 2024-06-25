import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CanadaSummaryComponent } from './canada-summary/canada-summary.component';
import { OntarioComponent } from './ontario/ontario.component';



@NgModule({
  declarations: [CanadaSummaryComponent, OntarioComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CanadaSummaryComponent, OntarioComponent]
})
export class ComponentsModule { }
