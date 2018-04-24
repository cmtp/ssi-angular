import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item} from '../shared/item';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../shared/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  item: Item;
  employee: Employee;

  constructor(
    private itemService: ItemService,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.itemService.getFeaturedItem().subscribe(item => this.item = item);
    this.employeeService.getFeaturedEmployee().subscribe(employee => this.employee = employee);
  }

}
