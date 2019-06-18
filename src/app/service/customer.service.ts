import {Injectable} from '@angular/core';
import {Customer} from '../dto/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  readonly baseUrl = environment.apiUrl + '/customers';

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }

  saveCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, customer);
  }
}
