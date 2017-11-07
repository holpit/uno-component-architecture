// utilizzo https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

  export function numberUsedValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      let result = [44, 5, 77, 3, 7, 33].includes(control.value) ? {'numberused': true } : null;
      let obs$ = of(result).pipe(delay(4000));
      console.log(obs$);
      return obs$;
    };
  }

/*   import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
  // import { Observable } from 'rxjs/Rx';
  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/of';
  import 'rxjs/add/operator/delay';
  
    export function numberUsedValidator(): AsyncValidatorFn {
      return (control: AbstractControl) => {
        let result = [44, 5, 77, 3, 7, 33].includes(control.value) ? {'numberused': true } : null;
        let obs$ = Observable.of(result).delay(4000);
        console.log(obs$);
        return obs$;
      };
    } */