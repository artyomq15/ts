
import { Observable, fromEvent } from 'rxjs';
import { auditTime, debounceTime, distinct } from 'rxjs/operators';
import { map } from 'rxjs/operators';

// fromEvent(document, 'mousemove')
//     .subscribe((x: MouseEvent) => console.log(x.clientX, " : ", x.clientY));

let i = 0;

fromEvent(document.querySelector('input'), 'keyup')
    .pipe(map((x: any) => x.target.value), auditTime(500), distinct())
    .subscribe(x => {
        document.querySelector('div').innerHTML = x;
        document.querySelector('span').innerHTML = String(++i);
    });