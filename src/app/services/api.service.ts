// Core
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { STATUS } from '../const/enums/status.enums';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    private apiUrl: string = 'APIURL';
    private headers: HttpHeaders;
    private token: string | null = null;
    private timestamp: number | null = null;
    excludedAPIs: string[] = [];

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        });

        // Check if token is not provided during construction, fetch from local storage
        if (!this.token || this.token == '') {
            this.token = localStorage.getItem('token');

            if (this.token) {
                this.headers = this.headers.set('Authorization', `Bearer ${this.token}`);
            }
        }

        this.timestamp = Math.floor(Date.now() / 1000);
    }

    // Method to update the token dynamically
    updateToken(token: string): void {
        this.token = token;
        this.headers = this.headers.set('Authorization', `Bearer ${this.token}`);
    }

    private handleError(error: any) {
        this.stopLoader();

        if(error.status == STATUS.UNAUTHORIZED){
            localStorage.clear();
            return window.location.href = '../'
        } else{
            return throwError(() => error);
        }
    }

    private startLoader(apiEndpoint: string) { }
    private stopLoader() { }

    // Fetch data from api without any parameter
    get(req: any): Observable<any> { 
        this.startLoader(req.endpoint);
        return this.http.get(this.apiUrl + req.endpoint + '?t='+this.timestamp, { headers: this.headers }).pipe(
          catchError(error => this.handleError(error)),
          finalize(() => this.stopLoader()) // Hide loader after the request completes (success or error)
        );
    }

    // Fetch data from APi by providing ID
    getById(req: any): Observable<any> {
        this.startLoader(req.endpoint);
        return this.http.get(`${this.apiUrl}${req.endpoint}/${req.id}`+ '?t='+this.timestamp, { headers: this.headers }).pipe(
            catchError(error => this.handleError(error)),
            finalize(() => this.stopLoader()) // Hide loader after the request completes (success or error)
        );
    }

    getByQueryParameter(req: any): Observable<any>{
        this.startLoader(req.endpoint);
        return this.http.get(`${this.apiUrl}${req.endpoint}`, { headers: this.headers, params: req.params }).pipe(
            catchError(error => this.handleError(error)),
            finalize(() => this.stopLoader()) // Hide loader after the request completes (success or error)
          );
    }

    // Post data through api
    post(req: any): Observable<any> {
        this.startLoader(req.endpoint);
        return this.http.post(
            this.apiUrl + req.endpoint + '?t='+this.timestamp, req.params, { headers: this.headers }).pipe(
            catchError(error => this.handleError(error)),
            finalize(() => this.stopLoader()) // Hide loader after the request completes (success or error)
        );
    }

    // Update data through api
    put(req: any): Observable<any> {
        this.startLoader(req.endpoint);
        return this.http.put(
            this.apiUrl + req.endpoint + '?t='+this.timestamp, req.params  , { headers: this.headers }).pipe(
            catchError(error => this.handleError(error)),
            finalize(() => this.stopLoader()) // Hide loader after the request completes (success or error)
        );
    }

    // Delete data by ID only.
    delete(req: any): Observable<any> {
        this.startLoader(req.endpoint);
        return this.http.delete(`${this.apiUrl}${req.endpoint}/${req.id}`, { headers: this.headers }).pipe(
            catchError(error => this.handleError(error)),
            finalize(() => this.stopLoader()) // Hide loader after the request completes (success or error)
        );
    }

    // This is sending id as parameter
    deleteParameter(req: any): Observable<any> {
        this.startLoader(req.endpoint);
        return this.http.delete(`${this.apiUrl}${req.endpoint}?${req.qp}=${req.id}`, { headers: this.headers }).pipe(
            catchError(error => this.handleError(error)),
            finalize(() => this.stopLoader()) // Hide loader after the request completes (success or error)
        );
    }
}