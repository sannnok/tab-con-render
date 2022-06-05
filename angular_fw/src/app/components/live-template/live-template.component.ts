import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HLJSApi } from 'highlight.js';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CoreService } from 'src/app/services/core.service';
declare var hljs: HLJSApi;

@Component({
  selector: 'app-live-template',
  templateUrl: './live-template.component.html',
  styleUrls: ['./live-template.component.css']
})
export class LiveTemplateComponent implements AfterViewInit {

  tick$ = new Subject();

  constructor(public coreService: CoreService, private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    document.getElementById('pre').addEventListener('input', e => this.tick$.next(e));
    this.tick$.pipe(debounceTime(200)).subscribe(this.applyChanges.bind(this))
  }

  applyChanges(e: any) {
    this.coreService.htmlString = e.srcElement.textContent;
    hljs.highlightBlock(document.getElementById('pre'))
  }
}
