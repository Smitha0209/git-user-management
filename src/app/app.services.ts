import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class AppService {
    userUrl = 'https://api.github.com/users/';  //  User api


    constructor(private http: HttpClient) { }

    getUserData(username): Observable<[]> {
        return this.http.get<[]>(this.userUrl + username)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    getUserRepos(repoUrl): Observable<[]> {
        return this.http.get<[]>(repoUrl)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    getReadmeUrl(repoUrl): Observable<[]> {
        return this.http.get<[]>(repoUrl + "/readme")
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    // getReadme(readmeUrl): Observable<[]> {
    //     return this.http.get<[]>(repoUrl + "/readme")
    //         .pipe(
    //             retry(1),
    //             catchError(this.handleError)
    //         );
    // }

    handleError(error: HttpErrorResponse) {
        return throwError(error);
    }
}