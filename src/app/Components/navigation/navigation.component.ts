import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  previousPage() {
    alert("This button doesn't have a function yet! :(");
  }
  nextPage() {
    alert("This button doesn't have a function yet! :(");
  }
}
