import { Component, OnInit } from '@angular/core';
import { AbstractService } from '../abstract.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  myService;
  constructor(public abService: AbstractService) {
    // abService.myService$
    // .subscribe(service => {
    //   console.log(service);
    // });

    this.myService = abService.getMyService();
    // this.myService = abService.getMyService();
  }

  ngOnInit() {
    this.myService.getInfo();
  }

}
