import { Component } from '@angular/core';
import { WSAESHUTDOWN } from 'constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'assignment7';
  a =20;
  
  public show(): string {
  var a = 'Marvellous Infosystem';
  return a;

}

    }
