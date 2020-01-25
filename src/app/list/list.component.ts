import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users = [
    { name: 'Vasko', age: 45 },
    { name: 'Eli', age: 45 },
    { name: 'Velizar', age: 17 },
    { name: 'Velizar', age: 16 }
  ];
  deleteAct(val: object) {
    this.users = this.users.filter(x => x !== val );
  }
  constructor() { }

  ngOnInit() {
  }

}
