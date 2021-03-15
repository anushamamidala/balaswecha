import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/shared/course';

@Component({
  selector: 'app-simulations',
  templateUrl: './simulations.component.html',
  styleUrls: ['./simulations.component.css']
})
export class SimulationsComponent implements OnInit {
  @Input() simulationItems: Course[];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onClickSimulation(item) {
    this.router.navigate(['/videos', item.url]);
  }
}
