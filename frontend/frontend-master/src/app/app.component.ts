import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './services/exercise.service';
import { HelpService } from './services/help.service';
import { MlServiceService } from './ml-service.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  displayed: boolean = false;

  fileNameDialogRef: MatDialogRef<ModalComponent>;

  constructor(
    public exerciseService: ExerciseService,
    public helpService: HelpService,
    private mlService: MlServiceService,
    private dialog: MatDialog
    ) {}

  public uploadData() {
    this.mlService.uploadPos();
  }

  onPress(){
    if (this.displayed) {
      return;
    }
    console.log('User presses');
    this.helpService.cancelSpeech();
    this.helpService.displayHelp();
    this.fileNameDialogRef = this.dialog.open(ModalComponent, {
      hasBackdrop: false
    });
  }
}
