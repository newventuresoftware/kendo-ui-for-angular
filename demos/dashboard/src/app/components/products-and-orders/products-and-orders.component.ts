import { ProductsOrdersService } from '../../services/products-orders.service';
import { Component, OnInit } from '@angular/core';
import { SelectionEvent, GridDataResult } from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-products-and-orders',
    templateUrl: './products-and-orders.component.html',
    styleUrls: ['./products-and-orders.component.scss']
})
export class ProductsAndOrdersComponent implements OnInit {

    orders = [];
    selectedOrderInfo: any = {};

    orderDetailsDialogOpened = false;

    constructor(private dataService: ProductsOrdersService) { }

    ngOnInit() {
        this.dataService.getOrders().subscribe(data => this.orders = data);
    }

    onGridSelectionChange(selection: SelectionEvent) {
        const row = selection.selectedRows[0];
        const orderId = row.dataItem.OrderID;

        this.dataService.getOrderInformation(orderId)
            .subscribe(orderInfo => {
                this.selectedOrderInfo = orderInfo;
                this.openOrderDetailsDialog();
            });
    }

    openOrderDetailsDialog() {
        this.orderDetailsDialogOpened = true;
    }

    closeOrderDetailsDialog() {
        this.orderDetailsDialogOpened = false;
    }
}
