import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';   // mentor

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly dataservice: DataService         // mentor
  ) { }
  ngOnInit() { console.log(this.dataservice.mokoData) }   // mentor
}
