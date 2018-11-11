import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EtsComponent } from './ets/ets.component';

import {FormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { TableComponent } from './table/table.component';
import { TableFilterPipe } from './table-filter.pipe'

const rou: Routes = [
  {path: '', component:  EtsComponent},

  {path: 'table', component:  TableComponent},

  {path: 'update', component:  UpdateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EtsComponent,
    UpdateComponent,
    TableComponent,
    TableFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rou)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
