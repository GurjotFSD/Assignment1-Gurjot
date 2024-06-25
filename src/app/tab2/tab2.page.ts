import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { MessageService } from 'src/app/message.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  message!: string;
  records!: any;

  constructor(private dataService: DataService, private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.messageService.getMessage().subscribe(message => {
      this.message = message;
    });
    this.records = this.dataService.getSelectedData(); 
    console.log(this.records);
  }

  onSelect(record: any) {
    this.dataService.onSelect(record);
    this.router.navigate(['/detail']);
  }

}
