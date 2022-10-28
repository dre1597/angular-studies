import { Component } from '@angular/core';

import { MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dialogRef: MatDialogRef<ModalComponent> | null = null;

  constructor(public dialog: MatDialog) {
  }

  openModal(): void {
    if (this.dialogRef?.getState() === MatDialogState.OPEN) {
      this.dialogRef.removePanelClass('display-none');
    } else {
      this.dialogRef = this.dialog.open(ModalComponent, {
        hasBackdrop: false,
      });
    }
  }
}
