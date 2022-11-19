import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.sass'],
})
export class SubscribeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    alert("Subscribed! ... just kidding. This site doesn't store anything. :)");
  }
}
