import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  id: number;
  name: string;
  surname: string;
  degree: string;
  hash: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    // this.id = +this.route.snapshot.params[`id`];
    // this.name = this.route.snapshot.params[`name`];
    // this.surname = this.route.snapshot.queryParams[`surname`];
    // this.degree = this.route.snapshot.queryParams[`degree`];
    this.hash = this.route.snapshot.fragment;
    this.route.params.subscribe((params: Params) => {
      this.id = +params[`id`];
      this.name = params[`name`];
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.surname = params[`surname`];
      this.degree = params[`degree`];
    });
  }

  openJohnsPage() {
    this.router.navigate(['/employers', 9, 'Johnny'], {
      queryParams: {
        surname: 'Brjonni',
        degree: 'Middle',
      },
      fragment: 'task'
    });

  }
}
