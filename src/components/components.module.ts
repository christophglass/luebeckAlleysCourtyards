import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
import { GaengeModalComponent } from './gaenge-modal/gaenge-modal';
@NgModule({
  declarations: [GaengeModalComponent],
  imports: [IonicModule],
  exports: [GaengeModalComponent],
  entryComponents: [
    GaengeModalComponent
  ]
})
export class ComponentsModule { }
