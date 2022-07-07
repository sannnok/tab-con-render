import { Injectable, Component, NgModule, Compiler, Injector, NgModuleRef, ComponentRef, EventEmitter } from '@angular/core';
import { User } from '../components/user-card/interfaces/user';
import { CommonModule } from '@angular/common';
import { DEFAULT_TEMPLATE } from '../constants/default-template';
import { DEFAULT_USERS } from '../constants/users';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public userPick = new EventEmitter<User>();
  public updatePersonListView = new EventEmitter();

  public get htmlString() {
    return this._htmlString;
  }

  public set htmlString(val: string) {
    if (!val) {
      return;
    }

    console.log('Template changes registered')

    this._htmlString = val;
    this.userPick.emit();
  }


  public get personCollection() {
    return this._personCollection;
  }

  public set personCollection(val: User[]) {
    this._personCollection = val;
    localStorage.setItem('personCollection', JSON.stringify({
      personCollection: this._personCollection
    }));
  }

  private _personCollection: User[] = DEFAULT_USERS;
  private _htmlString = DEFAULT_TEMPLATE;

  constructor(
    private compiler: Compiler,
    private injector: Injector,
    private m: NgModuleRef<any>
  ) {
    window.onstorage = this.onStorageChange.bind(this);
  }

  public async compileModuleAndComponents(): Promise<ComponentRef<any>> {

    const tmpCmp = Component({ template: this.htmlString })(class { });
    const tmpModule = NgModule({ imports: [CommonModule], declarations: [tmpCmp] })(class { });

    return new Promise(resolve => {
      this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
        .then(factories => {
          resolve(factories.componentFactories[0].create(this.injector));
        });
    });
  }

  private onStorageChange(e: StorageEvent) {
    this._personCollection = JSON.parse(e.newValue) && JSON.parse(e.newValue).personCollection;
    this.updatePersonListView.emit();
  }
}
