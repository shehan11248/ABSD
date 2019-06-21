import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../dto/customer";
import {ItemService} from "../../service/item.service";
import {Item} from "../../dto/item";
import {Orders} from "../../dto/orders";
import {OrderItem} from "../../dto/orderItem";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {

  customers: Customer[] = [];
  items: Item[] = [];
  orders: Orders[] = [];
  selectedOrder: Orders = new Orders('', '', '');
  CID = '';
  names = '';
  address = '';
  itemcode = '';
  salary = '';
  unitprice = '';
  description = '';
  qty = '';
  Oqty = '';
  tblorderitem: OrderItem[] = [];

  constructor(private customerService: CustomerService, private itemService: ItemService, private  orderService: OrderService) {
  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(customers => {
      this.customers = customers;
    });

    this.itemService.getAllItems().subscribe(items => {
      this.items = items;
    });
  }

  getID(event: any) {
    this.CID = event.target.value;
    const customerL = this.customers.find(value => value.id === event.target.value);

    this.names = customerL.name;
    this.address = customerL.address;
    this.salary = String(customerL.salary);

  }

  getIID(event: any) {
    const itemL = this.items.find(value => value.code === event.target.value);
    this.itemcode = itemL.code;
    this.description = itemL.description;
    this.qty = String(itemL.qtyOnHand);
    this.unitprice = String(itemL.unitPrice);

  }

  onAddtoTable(value: string) {
    this.tblorderitem.push(new OrderItem(this.itemcode, this.description, Number(value), (Number(value) * Number(this.unitprice))));
  }

  saveOrder(oid: string, dates: string) {
    console.log("ss " + oid + " " + dates + " " + this.CID);
    this.orderService.saveOrder(this.selectedOrder, this.tblorderitem).subscribe(resp => {
      console.log(resp);
    })

  }

}
