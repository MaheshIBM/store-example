import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { AuthService } from './authservice';
import { HttpModule, } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Auth } from '../reducers/index';
import { AuthComponent } from '../auth/auth.component';
import { environment } from '../../../environments/environment';


describe('AuthService', () => {
    let httpMock: HttpTestingController;
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService],
            imports: [HttpClientTestingModule]
        });

        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(AuthService);

    });

    it('should return an auth', (done) => {
        const auth: Auth = { isLoggedIn: false, roles: [] };
        service.getAuthById(0)
            .subscribe(authResp => {
                expect(authResp).toBe(auth);
                done();
            });
        const authRequest = httpMock.expectOne(environment.api_url + '/auth/0');
        authRequest.flush(auth);

    });

});



