import {Customer} from "../../dto/customer";
import {CustomerService} from "../../service/customer.service";
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  customers: Customer[] = [];
  status: boolean = false;
  selectedCustomer: Customer = new Customer('', '', '', 0);

  @ViewChild('txtId', {static: true}) txtId: ElementRef;
  @ViewChild('frmCustomer', {static: true}) frmCustomer: NgForm;


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


  tableRow_Click(customer: Customer): void {
    this.selectedCustomer = Object.assign({}, customer);
  }

  newCustomer(): void {
    this.txtId.nativeElement.focus();
  }

  saveCustomer(): void {
    if (!this.frmCustomer.invalid) {

      this.customerService.saveCustomer(this.selectedCustomer)
        .subscribe(resp => {
          console.log(resp);
          if (resp) {
            alert('Customer has been saved successfully');
            this.customers.push(this.selectedCustomer);
          } else {
            alert('Failed to save the customer');
          }
        });

    } else {
      alert('Invalid Data, Please Correct...!');
    }
  }

}
