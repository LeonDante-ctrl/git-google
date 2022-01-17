import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[Effect]'
})
export class Effect {

  constructor() { }
  colors = [
    'yellow', 'orange', 'red', 'teal', 'green',
    'brown', 'maroon'
  ];

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('hover') changeColor  = () =>
    (this.color = this.borderColor = this.colors[Math.floor(Math.random() * this.color.length)])
}