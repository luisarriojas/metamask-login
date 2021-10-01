import { Component, OnInit } from '@angular/core';
import { MetamaskService } from 'src/app/services/metamask.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: any;

  constructor(public mmService: MetamaskService) { }

  ngOnInit(): void {
    this.mmService.init();
  }
}