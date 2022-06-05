import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { User } from '../user-card/interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  constructor(public coreService: CoreService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.coreService.updatePersonListView.subscribe(() => this.cdRef.detectChanges());
  }

  ngAfterViewInit(): void {
    this.selectItem(this.coreService.personCollection.find(() => true));
  }

  public selectItem(person: User) {
    this.coreService.personCollection
      .map(p => p.selected = p.lastName === person.lastName);

    this.coreService.userPick.emit(person);
  }

}
