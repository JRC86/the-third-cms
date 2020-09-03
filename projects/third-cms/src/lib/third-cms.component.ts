import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-third-cms',
  templateUrl: './third-cms.component.html',
  styleUrls: ['./third-cms.component.css'],
})
export class ThirdCmsComponent implements OnInit {
  imageUrl: String;

  constructor() {
    this.imageUrl =
      'https://res.cloudinary.com/carlhernek/image/upload/v1594818036/SAR-demo/Restaurants/orlova-maria-oMTlhdFUhdI-unsplash_tfbudv.jpg';
  }

  ngOnInit(): void {}
}
