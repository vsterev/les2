import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() info: { name: string; age: number };
  @Output() delete: EventEmitter<any> = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  deleteAct() {
    this.delete.emit(this.info);
  }
}
