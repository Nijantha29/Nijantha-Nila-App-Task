import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
 
@Component({
  selector: 'app-wrapper-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './wrapper-card.component.html',
  styleUrls: ['./wrapper-card.component.scss']
})
export class WrapperCardComponent implements OnInit {
  constructor() { }
 
  ngOnInit(): void {
  }
 
}