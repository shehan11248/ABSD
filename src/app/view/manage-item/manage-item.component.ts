import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Item} from "../../dto/item";
import {ItemService} from "../../service/item.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css']
})
export class ManageItemComponent implements OnInit {

  items: Item[] = [];
  status: boolean = false;
  selectedItem: Item = new Item('', '', '', '');

  @ViewChild('txtId', {static: true}) txtId: ElementRef;
  @ViewChild('frmItem', {static: true}) frmItem: NgForm;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(items => {
      this.items = items;
    });
  }

  tableRow_Click(item: Item): void {
    this.selectedItem = Object.assign({}, item);
  }

  saveItem(): void {
    if (!this.frmItem.invalid) {

      this.itemService.saveItem(this.selectedItem)
        .subscribe(resp => {
          console.log(resp);
          if (resp) {
            alert('Item has been saved successfully');
            this.items.push(this.selectedItem);
          } else {
            alert('Failed to save the Item');
          }
        });

    } else {
      alert('Invalid Data, Please Correct...!');
    }
  }

}
