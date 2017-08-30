import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  @Output() addStudent = new EventEmitter<any>();
  @Input() message;
  variable1 = 'add';

  constructor() {}

  ngOnInit() {
  }

  add(){
    this.addStudent.emit({mode: this.variable1})
  }
  }