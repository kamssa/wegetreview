import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-abonnes-header',
  templateUrl: './page-abonnes-header.component.html',
  styleUrls: ['./page-abonnes-header.component.scss']
})
export class PageAbonnesHeaderComponent implements OnInit {

  @Input('bgImage') bgImage : string;
  constructor() { 
    this.bgImage = (this.bgImage!=='' && this.bgImage!==undefined && this.bgImage!==null) ? this.bgImage : 'assets/bgv.jpg';
  }

  ngOnInit() {
  }

}
