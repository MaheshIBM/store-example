import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TestErrorAction, ClearErrorAction } from '../reducers/errorreducer';
import { AppState, Auth } from '../reducers/index';

@Component({
    selector: 'app-test',
    templateUrl: 'test.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class TestComponent {

    constructor(private store$: Store<AppState>) {

    }

    count = 0;
    @Input()
    name: string;

    @Output()
    appButtonClicked = new EventEmitter<any>();

    appTestClick(event) {
        this.count = this.count + 1;
        /* if (this.count % 2 === 0) {
            this.store$.dispatch(new TestErrorAction(
                { message: 'An error has happened' })
            );
        } else {
            this.store$.dispatch(new ClearErrorAction());
        } */
        console.log('Button was clicked');
        this.appButtonClicked.emit({ event });
        
    }
}
