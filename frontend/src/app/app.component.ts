import { Component, OnInit } from '@angular/core';
import { MlServiceService } from './ml-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practicantes-ucode';

  constructor(private mlService: MlServiceService) {
  }

  ngOnInit() {
  }

  public uploadData() {
    this.mlService.predict([]);
  }
}
