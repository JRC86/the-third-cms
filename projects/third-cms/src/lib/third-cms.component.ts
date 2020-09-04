import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-third-cms',
  templateUrl: './third-cms.component.html',
  styleUrls: ['./third-cms.component.css'],
})
export class ThirdCmsComponent implements OnInit {
  imageUrl?: String;
  textArr?: String[];
  cmsType: Number; // 0 = Empty, 1 = image, 2 = Text, 3 = ...etc

  constructor() {
    this.imageUrl =
      'https://res.cloudinary.com/carlhernek/image/upload/v1594818036/SAR-demo/Restaurants/orlova-maria-oMTlhdFUhdI-unsplash_tfbudv.jpg';
    this.textArr = ['Paragraph one', 'Paragraph two'];
    this.cmsType = 0;
  }

  ngOnInit(): void {}
}
