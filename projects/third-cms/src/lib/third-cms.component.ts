import { Component, OnInit, Input, Inject } from '@angular/core';
import { ThirdCmsService } from './third-cms.service';

@Component({
  selector: 'the-third-cms',
  templateUrl: './third-cms.component.html',
  styleUrls: ['./third-cms.component.css'],
})
export class ThirdCmsComponent implements OnInit {
  // Inputs
  @Input() Auth: any;
  @Input() CmsId: any;

  // 1. User is admin and may edit content.
  isAdmin: boolean;
  serviceAdmin: string;

  // 2. Toggles for editing UI.
  editToggle: boolean;
  textEdit: boolean;

  // 3. Content Variables.
  imageUrl?: any;
  imagePath?: any;
  textString?: string;
  tempImg: any;

  // 4. CMS Type Definition.
  cmsType: number; // 0 = Empty, 1 = Image, 2 = Text, 3 = ...etc.
  cmsClassDisplay: string[];

  // 5. CmsItems & Cms ID
  cmsId: number; // Must be unique for url.
  cmsUrl: string;
  cmsItems: any[];

  constructor(private cmsService: ThirdCmsService) {
    // 1. User is admin.
    this.isAdmin = false;
    this.serviceAdmin = 'admin@app.com'; // Hard coded for demo purposes.

    // 2. Toggles for editing UI.
    this.editToggle = false;

    // 3. Content Variables.
    this.imageUrl = null;
    this.imagePath = null;
    this.textString = null;

    // 4. CMS Type Definition & Classes.
    this.cmsType = 0;
    this.cmsClassDisplay = ['cms-hide', 'cms-hide', 'cms-hide'];
    this.tempImg = 'upload here';

    // 5. Get CmsItems for this page & set cmsId.
    this.cmsService.get('').subscribe((item) => {
      this.cmsItems.push(item);
    });
    this.cmsId = this.CmsId;
    this.cmsUrl = window.location.href;
  }

  // Toggle Editing UI.
  editButton = () => {
    if (this.editToggle) {
      this.editToggle = false;
      // UPLOAD cmsItem here.
      // Upload function needs to check if itemData is the same as currently in the app and not upload if that is the case.
    } else {
      this.editToggle = true;
    }
  };

  // Image editing functions.
  // Preview code for angular found at: https://www.talkingdotnet.com/show-image-preview-before-uploading-using-angular-7/.
  onFileChanged(event: any) {
    // Set file as preview.
    const file = event.target.files;
    console.log(file[0]);
    let reader = new FileReader();
    this.imagePath = file[4];
    reader.readAsDataURL(file[0]);
    reader.onload = (_event) => {
      this.imageUrl = reader.result;
    };
  }

  // Text editing functions.
  editText = () => {
    if (this.textEdit) {
      let textToFormat = this.textString;
      const regex = /<br>/gi;
      this.textString = textToFormat.replace(regex, '');
      this.textEdit = false;
    } else {
      this.textEdit = true;
      if (!this.textString || this.textString === '') {
        this.textString = 'Write something';
      }
    }
  };

  setTextContent = (text: string) => {
    if (text !== this.textString) {
      this.textString = text;
    }
  };

  // Authorizes the user as admin.
  setAdmin = (auth: string) => {
    if (auth === this.serviceAdmin) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  };

  // Changes the CMS type.
  setCmsType = (type: number) => {
    for (var i = 0; i < this.cmsClassDisplay.length; i++) {
      this.cmsClassDisplay[i] = 'cms-hide';
      if (type !== 0 && i === type) {
        this.cmsClassDisplay[type] = 'cms-show';
      }
    }
    this.cmsType = type;
    this.editToggle = false;
  };

  ngOnInit(): void {
    this.setAdmin(this.Auth);
    this.setCmsType(this.cmsType);
  }
}
