import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Error } from '../reducers/errorreducer';
import { AppState, Auth } from '../reducers/index';

@Component({
    selector: 'app-error',
    templateUrl: 'error.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class ErrorComponent {
    @Input()
    error: Error;

    constructor(private store$: Store<AppState>) {
        store$.subscribe((state) => {});
    }
}




