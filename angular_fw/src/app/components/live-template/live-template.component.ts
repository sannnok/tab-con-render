import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-live-template',
  templateUrl: './live-template.component.html',
  styleUrls: ['./live-template.component.css']
})
export class LiveTemplateComponent implements OnInit {

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
  }

}
