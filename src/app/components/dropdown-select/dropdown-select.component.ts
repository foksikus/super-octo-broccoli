import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss'],
})
export class DropdownSelectComponent {
  public open = false;
  public searchQuery = '';

  public matches: string[] = [];
  public updateQuery(query: any): void {
    if (!query) {
      this.matches = [];
      return;
    }
    this.searchQuery = query.value as string;
    this.matches = ['Option 1', 'Option 2', 'Option 3'];
  }

  public handleOnBlur(): void {
    // this.open = false;
  }

  public handleKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.open = false;
    }
  }

  public select(match: string): void {
    console.log('Selected: ', match);

    this.searchQuery = match;
    this.open = false;
  }
}
