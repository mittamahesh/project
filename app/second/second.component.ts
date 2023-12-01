import { Component,OnInit } from '@angular/core';
import { StudentsService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class StudentComponent implements OnInit{
     stulist:any[]=[];
     constructor(private studentService:StudentsService)
     {

     }
     ngOnInit():void{
      this.stulist=this.studentService.getAllStudents();
     }

     addStudent(stuname:string,activity:string)
     {
       this.studentService.addStudent(stuname,activity);
       alert("Student added Successfully");
     }

     
}