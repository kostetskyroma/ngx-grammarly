import { Component } from '@angular/core';
import { demoText } from './app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly demoText = {
    textarea: demoText.textarea,
    input: demoText.input,
    contenteditable: demoText.contenteditable,
  };
}
