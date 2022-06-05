import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { HLJSApi } from 'highlight.js';
import { interval, Subject } from 'rxjs';
import { debounceTime, delay, takeUntil } from 'rxjs/operators';
import { CoreService } from 'src/app/services/core.service';
declare var hljs: HLJSApi;

@Component({
  selector: 'app-live-template',
  templateUrl: './live-template.component.html',
  styleUrls: ['./live-template.component.scss']
})
export class LiveTemplateComponent implements AfterViewInit {

  tick$ = new Subject();

  constructor(public coreService: CoreService, private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    document.getElementById('pre').addEventListener('input', e => this.tick$.next(e));
    this.tick$.pipe(debounceTime(200)).subscribe(this.updateTemplateModel.bind(this));
    this.tick$.pipe(debounceTime(10000)).subscribe(this.highlightTheCode.bind(this));
  }

  private updateTemplateModel(e: any) {
    this.coreService.htmlString = e.srcElement.textContent;
  }

  private highlightTheCode() {
    hljs.highlightBlock(document.getElementById('pre'));
  }
}
