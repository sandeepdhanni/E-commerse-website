
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerseller',
  templateUrl: './footerseller.component.html',
  styleUrls: ['./footerseller.component.css']
})
export class FootersellerComponent {
  currentYear: number = new Date().getFullYear();
}
