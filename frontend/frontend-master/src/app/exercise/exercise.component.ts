import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { HelpService } from '../services/help.service';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  stopped = false;

  interval;

  constructor(public exerciseService: ExerciseService,
    public helpService: HelpService) { }

  onSwipeUp() {    
    this.helpService.cancelSpeech();
    console.log('Say time');
    var sentence:String = 'Your are playing for ';
      if(this.hour > 0){
        sentence += this.hour + ' hours, ';
      } 
      if(this.minute > 0){
        sentence += this.minute + ' minutes, ';
      }
      if(this.hour>0 || this.minute>0){
        sentence += 'and ';
      }
      sentence += this.second + 'seconds';
    this.helpService.speak(sentence); 
  }

  ngOnInit() {
    this.start();
  }

  start() {
    this.interval = setInterval( () => {
      this.second += 1;
      if (this.second == 60) {
        this.second = 0;
        this.minute += 1;
        if (this.minute == 60) {
          this.minute = 0;
          this.hour += 1;
          if (this.hour = 24) {
            this.stop();
          }
        }
      }
    }, 1000);
  }

  resume() {
    if(this.stopped) {
      this.stopped = false;
      this.start();
    }
  }

  stop() {
    this.stopped = true;
    clearInterval(this.interval);
  }

  onSwipeDown() {
    this.helpService.cancelSpeech();
    console.log('User record ends');
    this.helpService.speak('Record finishes.');
    this.exerciseService.activeHome();
  }
}
