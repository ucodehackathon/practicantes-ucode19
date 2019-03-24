import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { MlServiceService } from '../ml-service.service';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  status: boolean = false
  stopped: boolean = false;

  sharedActivation: boolean = false;

  interval;

  constructor(public mlService: MlServiceService) { }

  sensorSwapping() {
    this.interval = setInterval(() => {
      this.status ? this.sensorOff() : this.sensorOn();
      this.mlService.uploadPos();
    }, 1000);
  }

  sensorOn() {
    this.status = true;
  }

  sensorOff() {
    this.status = false;
  }

  closeSensor() {
    clearInterval(this.interval);
  }
}
