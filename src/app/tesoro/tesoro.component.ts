import {Component} from '@angular/core';

@Component({
  selector: 'app-tesoro',
  templateUrl: './tesoro.component.html',
  styleUrls: ['./tesoro.component.css']
})
export class TesoroComponent {

  public passwd = '';
  public checkPass = 0;

  checkPasswd() {
    this.checkPass = this.passwd.toUpperCase() === 'HANOI' ? 1 : 2;
  }

}
