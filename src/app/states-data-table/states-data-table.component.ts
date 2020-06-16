import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
// import { MatTable } from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
// import {DataSource} from '@angular/cdk/collections';


@Component({
  selector: 'app-states-data-table',
  templateUrl: './states-data-table.component.html',
  styleUrls: ['./states-data-table.component.css']
})

export class StatesDataTableComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['state', 'total', 'positive', 'death'];

  constructor(private http: HttpClient){
    this.http.get('/api/v1/states/').subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;


    }, error => {
        console.log("There was an error getting data", error);
    });
  }
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }



}



