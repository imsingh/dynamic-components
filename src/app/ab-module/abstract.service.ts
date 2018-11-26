import { Injectable, Injector } from '@angular/core';
import { defer } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { MyService as FirstService } from './first-service/first-service.service';
import { MyService as SecondService } from './second-service/second-service.service';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {
  _config = {
    service: 'FirstService'
  };

  _configServer = {
    service: './first-service/first-service.service.ts'
  };
  
  // myService$ = defer(async () => {
  //   const module = await import(this._configServer.service);
  //   const serviceClass = module['MyService'];
  //   return serviceClass;
  // });
  
  serviceMap = new Map([
    ['FirstService', FirstService],
    ['SecondService', SecondService]
  ])
  constructor(private _injector: Injector, db: AngularFirestore) { 
    db.collection('config').valueChanges()
    .subscribe((value:any) => {
      if(value[0].service) {
        this._config = value[0];
      };
    });
  }

  getMyService() {
    const myService = this.serviceMap.get(this._config.service);
    return this._injector.get(myService); 
  }
}
