import { Component, OnInit } from '@angular/core';
import { convertEvent } from 'src/app/core/types/types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async convertValues($event: convertEvent){

  }

}
