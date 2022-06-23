import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedImage: File;
  imageSrc: string | ArrayBuffer = 'https://via.placeholder.com/250x150';
  imageUrl: string;

  constructor(private fireStorage: AngularFireStorage) {}

  showPreview(event: Event): void {
    const fileInput = <HTMLInputElement>event.target;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      const image = fileInput.files[0];
      reader.readAsDataURL(image);

      reader.addEventListener('load', (eventFileReader) => {
        this.imageSrc = eventFileReader.target.result as string;
        this.selectedImage = image;
      });
    } else {
      this.imageSrc = 'https://via.placeholder.com/250x150';
      this.selectedImage = null;
    }
  }

  sendImage() {
    if (this.selectedImage) {
      this._uploadImage();
    }
  }

  sendForm() {
    console.log(this.imageUrl);
  }

  private _uploadImage(): void {
    const filePath = `images/${
      this.selectedImage.name
    }_${new Date().getTime()}`;

    const fileRef = this.fireStorage.ref(filePath);

    this.fireStorage
      .upload(filePath, this.selectedImage)
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(
            (url) => {
              this.imageUrl = url;
            },
            () => {
              this.imageUrl = 'https://via.placeholder.com/250x150';
            }
          );
        })
      )
      .subscribe();
  }
}
