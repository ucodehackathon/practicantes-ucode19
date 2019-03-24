import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { SensorService } from '../services/sensor.service';
import { MlServiceService } from '../ml-service.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {
  sensorStatus: boolean = false;
  activated: boolean = false;

  constructor(
    public exerciseService: ExerciseService,
    public sensorService: SensorService,
    public mlService: MlServiceService
    ) { }

  ngOnInit() {
  }

  onSwipeLeft() {
    this.exerciseService.activeHome();
  }

  openSensor() {
    console.log("Open sensor");
    if (!this.sensorService.sharedActivation) {
      this.sensorService.sharedActivation = true;
      this.sensorService.sensorSwapping();
    } else { 
      this.sensorService.sharedActivation = false;
      this.closeSensor();
    }
  }

  closeSensor() {
    console.log("Sensor off");
    this.sensorService.status = false;
    this.sensorService.closeSensor();
  }

  swapStatus(status: string) {
    console.log(status);
    this.mlService.status = status;
  }
}
