import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class MlServiceService {
  private API_URL = environment.api;
  private uuid: string;

  constructor(private httpClient: HttpClient,
              private afStore: AngularFirestore) {
    this.uuid = UUID.UUID();
  }

  public helloWord(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/`);
  }

  public predict(data: number[]) {
    navigator.geolocation.getCurrentPosition((pos: Position) => {
      this.afStore.collection(this.uuid).add({
        pos: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
      });
    });
  }
}
