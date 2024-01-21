import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterInputsComponent } from './components/filter-inputs/filter-inputs.component';
import { BrancesTableComponent } from './components/brances-table/brances-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    FilterInputsComponent,
    BrancesTableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientJsonpModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
