import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PersonService } from 'src/services/person/person.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GenericResponse } from 'src/interface/generic.interface';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.css']
})

export class PersonalListComponent implements OnInit {

  
  response=[];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['personID', 'name', 'telephone', 'document','editar', 'eliminar'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    private _personServices: PersonService
  ) { }

  ngOnInit(): void {
    this._personServices.getAll().subscribe((res) => {
      console.log('res ',res);
      this.dataSource.data = res.data
    });
  }

  delete(person_id){
    console.log('juan ' + person_id)
  }

  update(person_id){
    console.log('juan ' + person_id)
  }


}

