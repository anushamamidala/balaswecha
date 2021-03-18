import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  filteredSimulationItems: Course[];
  classes: number[] = [4, 5, 6, 7, 8, 9];
  subjects = [{ type: "phy", value: "Physics", img: "assets/icons/physics-subject.svg" },
  { type: "che", value: "Chemistry", img: "assets/icons/chemistry-subject.svg" },
  { type: "math", value: "Maths", img: "assets/icons/math-subject.svg" },
  { type: "bio", value: "Biology", img: "assets/icons/biology-subject.svg" }]
  physicsItems: Course[];
  chemistryItems: Course[];
  mathsItems: Course[];
  biologyItems: Course[];

  constructor(private router: Router, private service: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getJSON().subscribe((response: any) => {
      this.simulationItems = response;
      this.physicsItems = this.simulationItems.filter((e) => e.category === 'phy').splice(0, 4);
      this.chemistryItems = this.simulationItems.filter((e) => e.category === 'che').splice(0, 4);
      this.mathsItems = this.simulationItems.filter((e) => e.category === 'math').splice(0, 4);
      this.biologyItems = this.simulationItems.filter((e) => e.category === 'bio').splice(0, 4);
      console.log(this.physicsItems)
    })
  }

  onClickOnSubj(type) {
    this.router.navigate(['/home', type]);
  }

  filterSubjectsClasses(): Course[] {
    let items = this.simulationItems;
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
    this.selectedOption = {
      "selectedClass": this.selectedClass,
      "selectedSubject": this.selectedSubject
    }
    this.filteredSimulationItems = this.filterSubjectsClasses();
  }

  onClickSubject(i) {
    this.selectedOption = {
      "selectedClass": "",
      "selectedSubject": i.type
    }
    this.simulationItems = this.filterSubjectsClasses();
  }
}
