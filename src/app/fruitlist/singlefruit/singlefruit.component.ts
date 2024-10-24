import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
  @Input("testNumber")fruitnumber:number = 0; // ("testNumber") wird nicht benötigt wenn Name außerhalb zu komplikationen führen
}
