import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Error } from '../reducers/errorreducer';

@Component({
    selector: 'app-test',
    templateUrl: 'test.component.html'
})


export class TestComponent {
    @Input()
    name: string;

    @Output()
    appButtonClicked = new EventEmitter<any>();

    appTestClick(event) {
        console.log('Button was clicked');
        this.appButtonClicked.emit({event});
    }
}
