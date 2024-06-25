import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  statusData: any[] =[];
  selectedData: any;
  message!: string;

  constructor(private http: HttpClient, private messageService: MessageService) {}

  ngOnInit() {
    this.fetchStatusData();
    this.messageService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

  fetchStatusData() {
    this.http.get<any[]>('assets/data/data.json')
    .subscribe(filteredData => {
      this.statusData = filteredData;
      console.log('Fetched data:', this.statusData);
    });
  }

  getSelectedData(): any {
    return this.selectedData;
  }
  onSelect(item: any) {
    this.selectedData = item;
  }
}
