import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { UUID } from 'angular2-uuid';

import { uniqueNamesGenerator } from 'unique-names-generator';
import { HelpService } from './services/help.service';

@Injectable({
  providedIn: 'root'
})
export class MlServiceService {
  private API_URL = environment.api;
  private uuid: string;
  private events = ["running", "walking", "dribbling", "pass", "shoot"];
  public status: string = "walking";
  public predictions;
  public name: string = uniqueNamesGenerator().split('_')[2];
  // TODO: Diccionari accions progresives i accions puntuals.

  constructor(
    private httpClient: HttpClient,
    private afStore: AngularFirestore,
    private helpService: HelpService
  ) {
    this.uuid = UUID.UUID();
    console.log(this.name);
    this.predictions = this.afStore.collection('preds').doc(this.uuid).valueChanges();
    this.predictions.subscribe( prediction => {
      console.log(prediction);
      prediction && this.helpService.speak(prediction.name + " " + prediction.sentence);
    })
  }

  public helloWord(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/`);
  }

  public uploadPos() {
    navigator.geolocation.getCurrentPosition((pos: Position) => {
      console.log(this.status);
      this.afStore.collection(`uploads`).add({
        pos: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        },
        id: this.uuid,
        name: this.name,
        event: this.status,
        time: new Date().getTime()
      });
    });
  }
}
