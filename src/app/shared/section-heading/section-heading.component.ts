import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss']
})
export class SectionHeadingComponent {

  @Input() headingText:string = ''
  @Input() color:string = '#C98A40'
  @Input() textAlign:string = 'center'


}
