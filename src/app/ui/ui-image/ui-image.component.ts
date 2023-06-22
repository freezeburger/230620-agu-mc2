import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ui-image',
  templateUrl: './ui-image.component.html',
  styleUrls: ['./ui-image.component.scss']
})
export class UiImageComponent {
  @Input() source = 'https://placehold.co/250x250';
  @Output() selected = new EventEmitter<string>();

  @ViewChild('image') imageElement!:ElementRef<HTMLImageElement>;

  ngAfterViewInit(){
    console.warn(this.imageElement)
  }
}
