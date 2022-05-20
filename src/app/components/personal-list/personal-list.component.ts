import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/services/person/person.service';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.css']
})

export class PersonalListComponent implements OnInit {

  dataSource = []

  constructor(
    private _personServices: PersonService
  ) { }

  ngOnInit(): void {
    this._personServices.getAll().subscribe((res) => {
      console.log('res ',res);
    });

  }

}
