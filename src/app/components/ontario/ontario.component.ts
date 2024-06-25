import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ontario',
  templateUrl: './ontario.component.html',
  styleUrls: ['./ontario.component.scss'],
})
export class OntarioComponent  implements OnInit {

  ontarioData: any;
  filteredData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/covid19.json')
      .subscribe(data => {
        this.ontarioData = data;
        this.filterDataById(35);
      });
  }

  filterDataById(id: number) {
    this.filteredData = this.ontarioData.find((item:any) => item.pruid === id);
    console.log(this.filteredData);
  }

}
