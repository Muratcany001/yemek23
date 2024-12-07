import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  isSearchedFormActive: boolean = false;
  toggleSearchFrom (event : MouseEvent):void {
    this.isSearchedFormActive = !this.isSearchedFormActive;
    event.stopPropagation();
  }
  closedSearchForm(): void{
    this.isSearchedFormActive =false; 
  }
  
}
