import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ngx-cons-trans-header",
  templateUrl: "./cons-trans-header.component.html",
  styleUrls: ["./cons-trans-header.component.scss"],
})
export class ConsTransHeaderComponent implements OnInit {
  @Output() periodChange = new EventEmitter<string>();
  @Input() type: string = "year";

  types: string[] = ["week", "month", "year"];

  changePeriod(period: string): void {
    this.type = period;
    this.periodChange.emit(period);
  }
  constructor() {}

  ngOnInit(): void {}
}
