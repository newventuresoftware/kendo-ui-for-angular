import { OrderService  } from '../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { SelectionEvent, GridDataResult, PageChangeEvent, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, State, GroupDescriptor, process } from '@progress/kendo-data-query';
import 'rxjs/add/operator/finally';

@Component({
    selector: 'app-products-and-orders',
    templateUrl: './products-and-orders.component.html',
    styleUrls: ['./products-and-orders.component.scss']
})
export class ProductsAndOrdersComponent implements OnInit {

    orders: GridDataResult = { data: [], total: 0 };
    selectedOrderInfo: any = {};

    orderDetailsDialogOpened = false;
    isLoading = false;

    state: State = {
        sort: [],
        skip: 0,
        take: 10,
        group: [],
    };

    constructor(private orderService: OrderService) { }

    ngOnInit() {
        this.loadGridData();
    }

    loadGridData() {
        this.isLoading = true;
        this.orderService.getOrders()
            .finally(() => this.isLoading = false)
            .subscribe(data => {
                this.orders = process(data, this.state);
            });
    }

    onGridSelectionChange(selection: SelectionEvent) {
        const row = selection.selectedRows[0];
        const orderId = row.dataItem.OrderID;

        this.orderService.getOrderInformation(orderId)
            .subscribe(orderInfo => {
                this.selectedOrderInfo = orderInfo;
                this.openOrderDetailsDialog();
            });
    }

    onGridDataStateChange(state: State) {
        this.state = state;
        this.loadGridData();
    }

    // onGridSortChange(sort: SortDescriptor[]) {
    //     this.state.sort = sort;
    //     this.loadGridData();
    // }

    // onGridPageChange(event: PageChangeEvent) {
    //     this.state.skip = event.skip;
    //     this.loadGridData();
    // }

    // onGridGroupChange(group: GroupDescriptor[]) {
    //     this.state.group = group;
    //     this.loadGridData();
    // }

    // onGridFilterChange(filter) {2
    //     this.state.filter = filter;
    //     this.loadGridData();
    // }

    openOrderDetailsDialog() {
        this.orderDetailsDialogOpened = true;
    }

    closeOrderDetailsDialog() {
        this.orderDetailsDialogOpened = false;
    }
}
