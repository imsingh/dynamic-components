import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ab-container',
  templateUrl: './ab-container.component.html',
  styleUrls: ['./ab-container.component.scss']
})
export class AbContainerComponent implements OnInit {
  componentLocation = {
    moduleId: 'first-component',
    selector: 'app-first-component'
  };
  config: Observable<any[]>;
  constructor(db: AngularFirestore) { 
    this.config = db.collection('config').valueChanges();
    this.config.subscribe(value => {
      if(!value[0]) {
        this.componentLocation = {
          moduleId: 'first-component',
          selector: 'app-first-component'
        };
      }
      this.componentLocation = value[0];
    });
  }

  ngOnInit() {
    
  }

}
