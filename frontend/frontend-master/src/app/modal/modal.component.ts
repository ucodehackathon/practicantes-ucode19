import { Component, OnInit } from '@angular/core';
import { HelpService } from '../services/help.service';
import { ExerciseService } from '../services/exercise.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  display:boolean=false;
  visual: boolean = false;

  constructor(
    public helpService: HelpService,
    public exerciseService: ExerciseService
  ) {
    this.exerciseService.homeStatus.subscribe( status => {
      this.visual = status;
    });
  }

  ngOnInit() {
  }

}
