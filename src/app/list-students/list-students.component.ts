import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
@Output() showData = new EventEmitter<any>();

  constructor() { }
  
  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string; 
  studYr: number;s
}

  getStudentRecord():object {
    this.studentRecord = {
    studNumber: this.studNo,
    studFirstName: this.studFname,
    studLastName: this.studLname,
    studProgram: this.studProg,
    studYear: this.studYr
    };

  clearValues(): void{
    this.studNo = null;
    this.studFname = null;
    this.studLname= null;
    this.studProg = null;
    this.studYr = null;
  }

  ngOnInit() {
  }

}
