import { OnDestroy, Pipe, PipeTransform } from '@angular/core';

export abstract class SomeBase  implements OnDestroy {
  /*
  * My real base class had a transform method, ect, but this seems to be
  *   all that's needed to trigger it, and it wouldn't trigger without it
  */
  ngOnDestroy() {
  }
}

@Pipe({
  name: 'some'
})
export class SomePipe extends SomeBase implements OnDestroy, PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

  //  Is this needed, or will Ivy use the base class's ngOnDestroy without it??
  //    it's not needed to trigger the error
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
