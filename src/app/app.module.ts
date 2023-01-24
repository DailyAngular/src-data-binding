import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SrcDataBindingComponent } from './src-data-binding';

@NgModule({
  declarations: [AppComponent, SrcDataBindingComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
