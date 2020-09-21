import { NgModule } from '@angular/core';
import { ThirdCmsComponent } from './third-cms.component';
import { CommonModule } from '@angular/common';
import { ThirdCmsService } from './third-cms.service';

@NgModule({
  declarations: [ThirdCmsComponent],
  imports: [CommonModule],
  exports: [ThirdCmsComponent],
  providers: [ThirdCmsService]
})
export class ThirdCmsModule {}
