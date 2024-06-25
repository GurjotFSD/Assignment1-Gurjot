import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canada-summary',
  templateUrl: './canada-summary.component.html',
  styleUrls: ['./canada-summary.component.scss'],
})
export class CanadaSummaryComponent  implements OnInit {

  covidData: any;
  filteredData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/covid19.json')
      .subscribe(data => {
        this.covidData = data;
        this.filterDataById(1);
      });
  }

  filterDataById(id: number) {
    this.filteredData = this.covidData.find((item:any) => item.pruid === id);
    console.log(this.filteredData);
  }

}
