import { Component,OnInit } from '@angular/core';
import { StudentsService } from '../student.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FacultyComponent implements OnInit{
      stulist:any[]=[];
      constructor(private studentService:StudentsService)
      {

      }
      ngOnInit():void {
        this.studentService.product().
        subscribe(productdata => this.stulist=productdata);
       } 
}