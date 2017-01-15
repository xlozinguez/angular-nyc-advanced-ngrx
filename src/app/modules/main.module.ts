import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SortContainer } from '../components/sort/sort.container';

@NgModule({
  bootstrap: [SortContainer],
  declarations: [SortContainer],
  imports: [BrowserModule],
  providers: []
})
export class MainModule {}
