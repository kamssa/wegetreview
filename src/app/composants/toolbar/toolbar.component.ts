import { OutilsService } from './../../parametres/outils.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ColorType } from 'src/app/parametres/custom-types';
import { MatToolbar } from '@angular/material/toolbar';

export type ToolbarItems = {
  title: string,
  link: string,
  icon: string,
  action: any,
  position: 'left'|'right',
  primary: ColorType,
  secondary: ColorType,
  strict_link: boolean
};

@Component({
  selector: 'cpn-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() items: ToolbarItems[] = [];
  @Input() primary: ColorType = 'primary';
  @Input() secondary: ColorType = 'light';
  @ViewChild(MatToolbar) toolbar: MatToolbar;
  @ViewChild('item_') items_: ElementRef<any>;
  item_class_default: string = "";
  item_class_active: string = "";

  showed: boolean = false;

  constructor(public outils: OutilsService) {
    this.settings();
  }

  ngOnInit() {
    this.settings();
   }

  settings(){
    this.item_class_default = 'bg-'+this.primary+'-hover bg-'+this.primary+
    '-active color-'+this.secondary;
    this.item_class_active = 'bg-'+this.secondary+'-hover bg-'+this.secondary+
    '-active color-'+this.primary;
  }

  toggle(){
    this.showed = !this.showed;
  }

}
