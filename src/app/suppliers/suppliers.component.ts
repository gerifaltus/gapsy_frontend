import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, PageEvent, MatPaginatorModule } from '@angular/material/paginator';

import { SuppliersService } from '../services/suppliers.service';
import { Supplier } from '../interfaces/supplier.interface';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  providers: [SuppliersService],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.scss'
})
export class SuppliersComponent implements OnInit{
  displayedColumns: string[] = ['name', 'razonSocial', 'direccion'];

  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: Supplier[] = [];
  length = 500;
  pageSize = 5;
  pageIndex = 0;
  showFirstLastButtons = true;

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  constructor(
    private supplierService: SuppliersService){

  }

  ngOnInit(){
    this.supplierService.getAll().subscribe((data) => {
      this.dataSource = data;
    })
  }

}
