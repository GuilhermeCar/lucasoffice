import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit {
  @Input() message?: string
  @Input() buttonMessage?: string
  @Output() buttonAction?: EventEmitter<any> = new EventEmitter()

  ngOnInit() {
    this.buttonMessage = this.buttonMessage ?? 'Voltar'
  }

  buttonClicked() {
    if(this.buttonAction && this.buttonAction.observed)
      this.buttonAction.emit()
    else
      window.history.back()
  }
}
