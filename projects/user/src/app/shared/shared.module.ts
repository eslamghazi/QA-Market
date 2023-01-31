import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule} from '@ngx-translate/core';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      extend:true
    }),
    FilterPipeModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports:[
    TranslateModule,
    SelectComponent,
    FormsModule,
    NgxPaginationModule,
    FilterPipeModule,


  ]
})
export class SharedModule { }
