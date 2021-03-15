import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/shared/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedClass = 4;
  selectedSubject = 'all';
  selectedOption: any;
  simulationItems: Course[];
  classes: number[] = [4, 5, 6, 7, 8, 9];
  subjects = [{ type: "phy", value: "Physics" }, { type: "che", value: "Chemistry" }, { type: "math", value: "Maths" }, { type: "bio", value: "Biology" }]
  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.service.getJSON().subscribe((response: any) => {
      this.simulationItems = response;
    })
  }
  getCourses() {
    this.selectedOption = {
      "selectedClass": this.selectedClass,
      "selectedSubject": this.selectedSubject
    }

    if (this.selectedOption?.selectedSubject !== 'all') {
      console.log('here', this.selectedOption?.selectedSubject);
      this.simulationItems = this.simulationItems.filter(e => e.category === this.selectedOption?.selectedSubject);
    }
  }

  onSelectClass(value) {
    this.selectedClass = value;
  }
  onSelectSubject(value) {
    this.selectedSubject = value;
  }
}
