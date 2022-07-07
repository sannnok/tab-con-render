import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, Input } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @ViewChild('vc', { read: ViewContainerRef, static: true }) private vc: ViewContainerRef;

  private cmpRef: ComponentRef<any>;
  private person: User;

  constructor(
    private coreService: CoreService
  ) { }

  ngOnInit() {
    this.coreService.userPick.subscribe(this.userPickListener.bind(this));
  }

  private userPickListener(person: User) {

    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    this.compileModuleAndComponents(person || this.person);

    if (!person) {
      return;
    }

    this.person = person;
  }

  private async compileModuleAndComponents(person: User) {
    this.cmpRef = await this.coreService.compileModuleAndComponents();

    this.cmpRef.instance.person = person;
    this.vc.insert(this.cmpRef.hostView);
  }

}
