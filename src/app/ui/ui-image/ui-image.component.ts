import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-image',
  templateUrl: './ui-image.component.html',
  styleUrls: ['./ui-image.component.scss']
})
export class UiImageComponent {
  @Input() source = 'https://placehold.co/250x250';
  @Output() selected = new EventEmitter<string>();
}
