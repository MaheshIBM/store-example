import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AuthComponent } from './auth.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../reducers';


describe('Component: Auth', () => {
    let fixture: ComponentFixture<AuthComponent>, authComponent: AuthComponent, element, de;

    // setup
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AuthComponent],
            imports: [FormsModule, StoreModule.forRoot(reducers)]
        });

        fixture = TestBed.createComponent(AuthComponent);
        authComponent = fixture.componentInstance;  // to access properties and methods
        element = fixture.nativeElement;      // to access DOM element
        de = fixture.debugElement;            // test helper
    });

    it('should set the button text properly', async(() => {
        authComponent.buttonText = 'Login';
        authComponent.auth = { isLoggedIn: false, roles: [] };
        authComponent.idText = '0';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(element.querySelector('#btnLogin').innerText).toBe('Login');
            expect(element.querySelector('#authId').value).toBe('0');
        });
        authComponent.login.subscribe(event => {
            expect(event.auth_id).toBe(0);
        });
        element.querySelector('#btnLogin').click();
    }));

    it('should raise login event with proper values if user is not logged in', async(() => {
        authComponent.auth = { isLoggedIn: false, roles: [] };
        authComponent.idText = '0';
        fixture.detectChanges();
        authComponent.login.subscribe(event => {
            expect(event.auth_id).toBe(0);
        });
        element.querySelector('#btnLogin').click();
    }));

    it('should raise logut event with proper values if user is logged in', async(() => {
        authComponent.auth = { isLoggedIn: true, roles: [] };
        authComponent.idText = '0';
        fixture.detectChanges();
            authComponent.logout.subscribe(event => {
            expect(event.auth_id).toBe(0);
        });
        element.querySelector('#btnLogin').click();
    }));

    it('should increment the counter values', async(() => {
        authComponent.auth = { isLoggedIn: true, roles: [] };
        element.querySelector('#btnLogin').click();
        element.querySelector('#btnLogin').click();
        element.querySelector('#btnLogin').click();
        expect(authComponent.counter).toBe(3);
    }));


});


