import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { HelpService } from '../services/help.service';
import { SensorService } from '../services/sensor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public exerciseService: ExerciseService,
    public helpService: HelpService,
    public sensorService: SensorService
    ) { }

  getPresentationDone(){
    return this.exerciseService.presentationDone
  }

  makePresentation(){
    this.exerciseService.makePresentation()
  }

  onSwipeUp() {
    this.helpService.cancelSpeech();
    console.log('User record starts');
    this.exerciseService.activeRecord();
    if (!this.sensorService.sharedActivation) {
      this.sensorService.sharedActivation = true;
      this.sensorService.sensorSwapping();
    }
    this.helpService.speak('Record starts.');
  }

  onSwipeRight() {
    console.log("SWIPE RIGHT");
    this.exerciseService.activeSensors();
  }

  ngOnInit() {
    if(!this.getPresentationDone()){
      this.helpService.cancelSpeech();
      this.helpService.speak('Hello, welcome to Project Lazarus. \
        Do you know how to use me? If you have any doubt, mantain pressed for 3 seconds. ');
      this.makePresentation();
    }
  }
}
