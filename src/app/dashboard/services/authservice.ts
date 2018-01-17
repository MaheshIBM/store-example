import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../reducers';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
        console.log('AuthService created');
    }

    getAuthById(id: number): Observable<Auth> {
        return this.http.get<Auth>(environment.api_url + '/auth/' + id.toString());
    }
}
