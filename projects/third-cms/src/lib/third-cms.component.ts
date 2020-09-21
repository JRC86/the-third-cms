import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'the-third-cms',
  templateUrl: './third-cms.component.html',
  styleUrls: ['./third-cms.component.css'],
})
export class ThirdCmsComponent implements OnInit {
  // Inputs
  @Input() Auth: any;
  @Input() CmsID: any;

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
  cmsType: number; // 0 = Empty, 1 = Image, 2 = Text, 3 = ...etc
  cmsClassDisplay: string[];

  constructor() {
    // 1. User is admin.
    this.isAdmin = false;
    this.serviceAdmin = 'admin@app.com';

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
  }

  // Toggle Editing UI.
  editButton = () => {
    if (this.editToggle) {
      this.editToggle = false;
    } else {
      this.editToggle = true;
    }
  };

  // Image editing functions.
  // Preview code for angular found at: https://www.talkingdotnet.com/show-image-preview-before-uploading-using-angular-7/
  onFileChanged(event: any) {
    const file = event.target.files;
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
      this.formatTextContent();
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

  // Temporary fix to contenteditable bug.
  formatTextContent = () => {
    let textToFormat = this.textString;
    const regex = /<br>/gi;
    this.textString = textToFormat.replace(regex, ' ');
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
