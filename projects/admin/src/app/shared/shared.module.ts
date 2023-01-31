import { MaterialModule } from '../material/material.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports:[
    TranslateModule,
    SelectComponent,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FilterPipeModule,
  ]
})
export class SharedModule { }
