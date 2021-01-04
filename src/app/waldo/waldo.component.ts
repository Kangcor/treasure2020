import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-waldo',
  templateUrl: './waldo.component.html',
  styleUrls: ['./waldo.component.css']
})
export class WaldoComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    document.querySelector('#imageholder').addEventListener('mousemove', (e: any) => {
      const ofst = (window.innerWidth - 1024) / 2;
      const glass = document.querySelector('.glass') as any;
      glass.style.left = Math.round(e.pageX - 60 - ofst) + 'px';
      glass.style.top = Math.round(e.pageY - 60) + 'px';
    });
  }

}
