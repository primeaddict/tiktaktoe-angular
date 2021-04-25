import { Component, Input } from "@angular/core";



@Component({
  selector:"app-square",
  template:'<h1>{{value}}</h1>',
  styles:['']
})
export class SquareComponent{

  @Input() value: 'X' | 'O';
}
