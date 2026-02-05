import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Input() search = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onSearchKeyUp: EventEmitter<string> = new EventEmitter();
  @Output() onSearchChange: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onHandleSearch() {
    this.onSearch.emit(this.search);
  }

  onSearchKeypress(event: any) {
    this.onHandleSearch();
  }

  onSearchDbKeyUp(e: any) {
    this.onSearchKeyUp.emit(this.search);
  }

  onSearchChg(e: any) {
    this.onSearchChange.emit(this.search);
  }

  reset() {
    this.search = '';
  }
}
