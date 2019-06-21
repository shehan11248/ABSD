import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import {Orders} from "../dto/orders";
import {OrderItem} from "../dto/orderItem";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  readonly baseUrl = environment.apiUrl + '/orders';


  saveOrder(order: Orders, orderDetail: OrderItem[]): Observable<boolean> {

    var jsonOb = {};

    jsonOb['order'] = order;
    jsonOb['orderDetails'] = orderDetail;
    console.log(jsonOb)
    return this.http.post<boolean>(this.baseUrl, jsonOb);

  }
}
