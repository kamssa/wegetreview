import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ColorType } from 'src/app/parametres/custom-types';

@Component({
  selector: 'cp-button',
  templateUrl: './cp-button.component.html',
  styleUrls: ['./cp-button.component.scss']
})
export class CpButtonComponent implements OnInit {
  @Input() color: ColorType = 'light';
  @Input() bg_color: ColorType = 'primary';
  // @ViewChild(MatButton) button: MatButton;
  @Output() onClick = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit() {
    this.button_settings();
  }

  button_settings(){
    // this.color = 'light';
    // this.bg_color = 'primary';
  }

  handleClick(){
    this.onClick.emit(true);
  }

}
