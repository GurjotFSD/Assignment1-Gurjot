import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  // detailData: any;
  // message!: string;

  // constructor(
  //   private route: ActivatedRoute,
  //   private messageService: MessageService
  // ) {}

  // ngOnInit() {
  //   this.detailData = this.route.snapshot.data['detailData'];
  //   this.messageService.current.subscribe(message => this.message = message);
  // }

  // sendMessage() {
  //   this.messageService.changeMessage("New message from Detail Page");
  // }

  detailData: any;
  message!: string;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router

  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.detailData = JSON.parse(params['data']);
      console.log(this.detailData);
    });
    this.messageService.current.subscribe(message => this.message = message);
  }

  sendMessage() {
    this.messageService.changeMessage("New message from Detail Page");
  }
  goBack() {
    this.router.navigate(['/ontario']);
  }
}
