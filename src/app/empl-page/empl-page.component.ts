import {Component, OnInit} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Employees, EmplsService} from './empls.service';

@Component({
  selector: 'app-empl-page',
  templateUrl: './empl-page.component.html',
  styleUrls: ['./empl-page.component.css']
})
export class EmplPageComponent implements OnInit {

  employees: any = [];

  asyncLoadEmployers() {
    return this.employees = this.emplsService.getEmployess();
  }

  constructor(private emplsService: EmplsService) {
  }

  ngOnInit() {
    return this.employees = this.emplsService.getEmployess();
  }
}
