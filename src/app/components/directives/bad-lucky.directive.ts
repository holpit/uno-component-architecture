import { AbstractControl, ValidatorFn } from '@angular/forms';

const BAD_LUCKY_NUMBERS = [13, 17];

export function badLuckyValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        return BAD_LUCKY_NUMBERS.includes(control.value) ? { 'badlucky': true } : null;
    };
}