import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-simulation',
  templateUrl: './video-simulation.component.html',
  styleUrls: ['./video-simulation.component.css']
})
export class VideoSimulationComponent implements OnInit {
  item: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('simUrl');
    this.item = "../assets/" + id + ".html";
    console.log(this.item)
  }

}
