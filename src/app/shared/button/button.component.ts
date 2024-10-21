import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() btnText:string = 'contact us'
  @Input() marginVal:string = ''
  @Input() goTo:string = '#contactUs'


}
