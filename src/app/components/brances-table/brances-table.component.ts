import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Branch from 'src/app/models/Branch';

@Component({
  selector: 'app-brances-table',
  templateUrl: './brances-table.component.html',
  styleUrls: ['./brances-table.component.css']
})
export class BrancesTableComponent{

  @Input() filteredArrForTable: Branch[] = []; //this variable will get the data that was filtered in the filter-inputs components
  titleColumns: string[] = ['Id', 'Name', 'Address', 'City','Area'];
}
