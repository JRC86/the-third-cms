import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-third-cms',
  templateUrl: './third-cms.component.html',
  styleUrls: ['./third-cms.component.css'],
})
export class ThirdCmsComponent implements OnInit {
  // User is admin and may edit content
  isAdmin: boolean;

  // Content Variables
  imageUrl?: string;
  textArr?: string[];
  cmsType: number; // 0 = Empty, 1 = Image, 2 = Text, 3 = ...etc

  // Class Definitions
  cmsClassDisplay: string[];

  constructor() {
    this.isAdmin = true;
    this.imageUrl =
      'https://res.cloudinary.com/carlhernek/image/upload/v1594818036/SAR-demo/Restaurants/orlova-maria-oMTlhdFUhdI-unsplash_tfbudv.jpg';
    this.textArr = [
      'Flexitarian air plant readymade williamsburg photo booth biodiesel lomo pork belly knausgaard actually. IPhone hell of iceland, direct trade church-key kombucha polaroid blog fanny pack franzen street art bicycle rights. Butcher tilde 8-bit flexitarian deep v tote bag, cardigan brooklyn messenger bag. Pug viral portland activated charcoal vape. Pork belly scenester glossier quinoa man bun austin salvia umami tilde 3 wolf moon forage kinfolk. Drinking vinegar tumblr slow-carb kale chips fanny pack.',
      'Yr mustache hoodie austin. Craft beer chicharrones echo park glossier squid fingerstache banjo copper mug neutra slow-carb iceland. Cliche heirloom waistcoat, coloring book man braid la croix actually. 90s chartreuse pour-over freegan cold-pressed kogi la croix shaman pitchfork authentic lomo bicycle rights asymmetrical migas. Street art plaid kombucha, tattooed man bun hoodie humblebrag pabst prism cloud bread hella chia. Celiac selfies sustainable gastropub irony green juice tote bag occupy, iceland put a bird on it prism.',
    ];
    this.cmsType = 2;
    this.cmsClassDisplay = ['cms-hide', 'cms-hide', 'cms-hide'];
  }

  setCmsType = (type: number) => {
    if (type !== 0) {
      this.cmsClassDisplay[type] = 'cms-show';
      console.log(this.cmsClassDisplay);
    }
  };

  ngOnInit(): void {
    this.setCmsType(this.cmsType);
  }
}
