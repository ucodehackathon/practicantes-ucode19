import { Component, OnInit, Input } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  exerciseStatus: boolean;
  homeStatus: boolean;
  sensorStatus: boolean;

  constructor(exerciseServie: ExerciseService) {
    exerciseServie.recordStatus.subscribe( status => {
      this.exerciseStatus = status;
    });
    exerciseServie.homeStatus.subscribe( status => {
      this.homeStatus = status;
    })
    exerciseServie.sensorsStatus.subscribe( status => {
      this.sensorStatus = status;
    });
  }

  ngOnInit() {
  }
}
