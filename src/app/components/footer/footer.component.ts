import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyRight: any ;
  constructor() { }

  ngOnInit() {
    this.copyRight = 'Copy right @2019 version 1.0.0 ';
  }

}
