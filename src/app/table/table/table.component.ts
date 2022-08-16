import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

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

  title = 'Users Table';

  head = [['ID', 'NAME', 'Age', 'Address','Date & Time','Email']]

  data = [
    [1, 'Jane Doe',12, '13th street in Maadi','2012-04-23T18:25:43.511Z', 'jane@halanchallenge.com'],
    [2, 'Justin Doe', 12,'15 Salah Salem street in Nasr city','2012-04-23T18:25:43.511Z', 'Justin@halanchallenge.com']
  ]

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
  
  createPdf() {
    var doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('The Users Detail', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);


    (doc as any).autoTable({
      head: this.head,
      body: this.data,
      theme: 'plain',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })

    // below line for Open PDF document in new tab
    doc.output('dataurlnewwindow')

    // below line for Download PDF document  
    doc.save('myteamdetail.pdf');
  }

  ngOnInit(): void {}
}
