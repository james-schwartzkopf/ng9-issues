import { NgModule } from '@angular/core';
import { SomeLibComponent } from './some-lib.component';
import { SomePipe } from './some.pipe';



@NgModule({
  declarations: [SomeLibComponent, SomePipe],
  imports: [
  ],
  exports: [SomeLibComponent]
})
export class SomeLibModule { }
