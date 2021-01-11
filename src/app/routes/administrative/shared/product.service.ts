import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Product} from './product-model';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ProductFilterDTO} from './product-filter.dto';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private url = 'http://localhost:8081/product';

    constructor(private httpClient: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    public findAll(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.url.concat('/find-all'))
            .pipe(
                catchError(this.handlerError)
            );
    }

    public getOne(id: number): Observable<Product> {
        return this.httpClient.get<Product>(this.url.concat(`/get-one/${id}`))
            .pipe(
                catchError(this.handlerError)
            );
    }

    findByFilter(productFilter: ProductFilterDTO): Observable<Product[]> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.post<Product[]>(this.url.concat('/find-by-filter'), JSON.stringify(productFilter), {headers})
            .pipe(
                catchError(this.handlerError)
            );
    }

    public save(product: Product): Observable<Product> {
        return this.httpClient.post<Product>(this.url.concat('/save'), JSON.stringify(product), this.httpOptions)
            .pipe(
                catchError(this.handlerError)
            );
    }

    handlerError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `${error.status} + ${error.message}`;
        }
        return throwError(errorMessage);
    }

}
