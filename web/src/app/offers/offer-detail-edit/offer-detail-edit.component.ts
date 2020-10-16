import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OfferService } from '../offer.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/models/offer';
import { interval, fromEvent } from 'rxjs';
//import { switchMap } from 'rxjs/operators';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-offer-detail-edit',
  templateUrl: './offer-detail-edit.component.html',
  styleUrls: ['./offer-detail-edit.component.scss']
})
export class OfferDetailEditComponent implements OnInit {

  constructor(private offerService: OfferService, private route: ActivatedRoute, public router: Router) { }
  offer: Observable<Offer>;

  ngOnInit() {
    // this.route.params
    // .switchMap((params: Params) => this.offerService.GetOffer(params['id']))
    // .subscribe((offer) => this.offer = offer);

    this.route.paramMap.subscribe(params => {
      console.log(params.get('Id'));
      //this.products.forEach((p: Product) => {
      //  if (p.id == params.id) {
      //    this.product = p;
      //  }
      //});
    });


    this.offer.subscribe((offer) => {
      console.log(`offer`, offer);
    });
  }

  editOffer(offerForm: NgForm) : void {
    console.log(offerForm.value);
  }
}
