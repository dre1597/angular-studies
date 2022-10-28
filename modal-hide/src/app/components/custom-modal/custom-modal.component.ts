import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit, OnDestroy {

  mostrar: boolean = false;

  ngOnInit(): void {
    console.log('ng on init')
  }

  ngOnDestroy(): void {
    console.log('ng on destroy')
  }

  toggle(): void {
    this.mostrar = !this.mostrar;
  }
}
