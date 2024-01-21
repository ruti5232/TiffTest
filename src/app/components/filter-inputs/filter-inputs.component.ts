import { Component } from '@angular/core';
import Branch from 'src/app/models/Branch';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-filter-inputs',
  templateUrl: './filter-inputs.component.html',
  styleUrls: ['./filter-inputs.component.css']
})
export class FilterInputsComponent {

  arrBranches: Branch[] = []
  
  selectedArea: string = "";
  selectedCity: string = "";
  freeSearchText: string = "";
  filteredArr: Branch[] = [];//this variable will contain the branches that were filtered by area | city | free text
  constructor(public dataService: DataService) {
    this.dataService.getAllBranches().subscribe(succ => {
      this.arrBranches = succ;
      console.log(this.arrBranches)
    });
  }

  filterByArea(selectedArea: string) {
    this.filteredArr = this.arrBranches.filter(branch => branch.store_region === selectedArea);
    console.log("filter by area", this.filteredArr)
  }
  filterByCity(selectedCity: string) {
    this.filteredArr = this.arrBranches.filter(branch => branch.city?.includes(selectedCity));
    console.log("filter by city", this.filteredArr)

  }
  filterByFreeSearchText(freeSearchText: string) {
    this.filteredArr = this.arrBranches.filter(branch => branch.city?.includes(freeSearchText) ||
      branch.store_title?.includes(freeSearchText) || branch.store_address?.includes(freeSearchText) || branch.store_phone?.includes(freeSearchText));
    console.log("filter by free text", this.filteredArr)
  }
}
