import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offer-detail-create',
  templateUrl: './offer-detail-create.component.html',
  styleUrls: ['./offer-detail-create.component.scss']
})
export class OfferDetailCreateComponent implements OnInit {

  constructor(private offerService: OfferService, public router: Router) { }

  // offer: Offer = {
  //   id: null,
  //   shipmentNumber: null,
  //   price: null,
  //   currency: null,
  //   vehicleSize: null,
  //   vehicleBuildUp: null,
  //   pickupLocationName: null,
  //   pickupDateTime: null,
  //   deliveryLocationName: null,
  //   deliveryDateTime: null,
  //   loadDetail1: null,
  //   loadDetail2: null,
  //   loadDetail3: null
  // }

  ngOnInit() {
  }

  saveOffer(offer: NgForm) : void {
    this.offerService.CreateOffer(offer.value).subscribe(
      (data: Offer) => {
        console.log(data);
        this.router.navigate(['']);
      },
      (error: any) => { console.log(error); }
    );
    console.log(offer.value);
  }
}
