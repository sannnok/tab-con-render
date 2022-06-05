import { BrowserModule } from '@angular/platform-browser';
import { Compiler, CompilerFactory, COMPILER_OPTIONS, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateHostDirective } from './directives/template-host.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LiveTemplateComponent } from './components/live-template/live-template.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    TemplateHostDirective,
    LiveTemplateComponent,
    UserCardComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: COMPILER_OPTIONS, useValue: {useJit: true}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: CompilerFactory.prototype.createCompiler, deps: [CompilerFactory]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
