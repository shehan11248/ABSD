import {Component, OnInit} from '@angular/core';
import {Customer} from "../../dto/customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  customers: Customer[] = [];
  status: boolean = false;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  doSomething(): void {
    this.status = this.status ? false : true
  }

}
