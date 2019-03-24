import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  recordStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);
  homeStatus: BehaviorSubject<boolean> = new BehaviorSubject(true);
  sensorsStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);
  presentationDone:boolean = false;

  constructor() { }

  activeRecord() {
    this.homeStatus.next(false);
    this.sensorsStatus.next(false);
    this.recordStatus.next(true);
  }

  activeHome() {
    this.sensorsStatus.next(false);
    this.recordStatus.next(false);
    this.homeStatus.next(true);
  }

  activeSensors() {
    this.recordStatus.next(false);
    this.homeStatus.next(false);
    this.sensorsStatus.next(true);
  }

  makePresentation(){
    this.presentationDone = true;
  }

}
