import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit{
  breadCrumb$!:Observable<any[]>
  constructor(private bcService:BreadcrumbService){}
  ngOnInit(): void {
    this.breadCrumb$ = this.bcService.breadcrumbs$
  }

}
