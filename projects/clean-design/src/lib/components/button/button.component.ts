import { Component, Input, OnInit } from '@angular/core';

export type CleanButtonFill = 'solid' | 'outline';
export type CleanButtonSize = 'small' | 'default' | 'large';

@Component({
  selector: 'clean-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() fill: CleanButtonFill = 'solid';
  @Input() size: CleanButtonSize = 'default';
  constructor() { }

  ngOnInit(): void {
  }

  getClass(property: string) {
    return `button-${property} `;
  }
  
  getAllClasses() {
    return `${this.getClass(this.fill)}${this.getClass(this.size)}`;
  }
}
