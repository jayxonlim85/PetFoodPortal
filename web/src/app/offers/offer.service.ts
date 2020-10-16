import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private httpClient: HttpClient) { }

  GetOffers(): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(`${environment.api}/api/offers`);
  }

  GetOffer(): Observable<Offer> {
    return this.httpClient.get<Offer>(`${environment.api}/api/offers`);
  }

  CreateOffer(offer: Offer): Observable<Offer> {
    return this.httpClient.post<Offer>(`${environment.api}/api/offers`, 
    offer, {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
    .pipe();
  }

  DeleteOffer(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.api}/api/DeleteOffer/${id}`)
        .pipe();
      }
  
  

}