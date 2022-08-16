import { Component, OnInit } from '@angular/core';

interface Users {
  name?: string;
  age?: number;
  address?: string;
  date?: string;
  email?: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  Users: Users[] = [
    {
      name: 'Jane Doe',
      age: 12,
      address: '13th street in Maadi',
      date: '2012-04-23T18:25:43.511Z',
      email: 'jane@halanchallenge.com',
    },
    {
      name: 'Justin Doe',
      age: 12,
      address: '15 Salah Salem street in Nasr city',
      date: '2012-04-23T18:25:43.511Z',
      email: 'Justin@halanchallenge.com',
    },
  ];
  constructor() {
    console.log(this.Users)
  }
  
  ngOnInit(): void {}
}
