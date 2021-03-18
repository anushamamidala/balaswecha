import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/shared/course';

@Component({
  selector: 'app-simulations',
  templateUrl: './simulations.component.html',
  styleUrls: ['./simulations.component.css']
})
export class SimulationsComponent implements OnInit {
  @Input() simulationItems: Course[];
  subject: string;
  constructor(private router: Router, private route: ActivatedRoute, private service: CourseService) { }

  ngOnInit(): void {
    this.subject = this.route.snapshot.paramMap.get('subject');
    if (this.subject && this.subject != "") {
      this.service.getJSON().subscribe((response: any) => {
        this.simulationItems = response.filter((e) => e.category === this.subject);
      })
    }

  }
  onClickSimulation(item) {
    this.router.navigate(['/videos', item.url]);
  }
}
