import { Component, OnInit } from '@angular/core';
import { Color } from '../../interfaces/colors';
import { ColorsService } from '../../services/colors.service'

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.css']
})
export class ClipboardComponent implements OnInit {

  color: Color;

  constructor(private colorService: ColorsService) {
  }

  ngOnInit(): void {
    this.getColor()
  }

  getColor() {
    this.colorService.color$.subscribe(res => {
      this.color = res;
    })
  }

}
