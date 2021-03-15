import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/shared/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedClass = "";
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

  filterSubjectsClasses(): Course[] {
    let items = [...this.simulationItems];
    if (this.selectedOption?.selectedClass != "" && this.selectedOption?.selectedSubject === 'all') {
      let filteredItems = items.filter(e =>
        e.class.includes(parseInt(this.selectedOption?.selectedClass))
      );
      return filteredItems;
    }
    else if (this.selectedOption?.selectedClass === "" && this.selectedOption?.selectedSubject !== 'all') {
      return items.filter(e => e.category === this.selectedOption?.selectedSubject
      )
    }
    else {
      return items.filter(e => (e.category === this.selectedOption?.selectedSubject) && (e.class.includes(parseInt(this.selectedOption?.selectedClass)))
      )
    }
  }

  getCourses() {
    this.selectedOption = {
      "selectedClass": this.selectedClass,
      "selectedSubject": this.selectedSubject
    }
    this.simulationItems = this.filterSubjectsClasses();
    console.log(this.simulationItems);
  }

  onSelectClass(value) {
    this.selectedClass = value;
  }
  onSelectSubject(value) {
    this.selectedSubject = value;
  }
}
