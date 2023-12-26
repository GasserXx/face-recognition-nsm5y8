import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  imageData: string | ArrayBuffer | null = null;

  constructor() {}

  uploadPhoto() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e: any) => {
      const file = e.target.files[0];
      this.previewPhoto(file);
    };
    fileInput.click();
  }

  previewPhoto(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageData = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  confirmPhoto() {
    // Implement the confirmation logic, like uploading to a server or storing the image
    console.log('Photo confirmed:', this.imageData);
  }

  resetUpload() {
    this.imageData = null;
  }
}
