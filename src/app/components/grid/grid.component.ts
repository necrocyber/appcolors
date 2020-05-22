import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../services/colors.service'
import { Colors, Color } from '../../interfaces/colors'


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  pantone: Color[];
  
  selectColor: Color = {
    id: null,
    name: null,
    year: null,
    color: null,
    pantone_value: null
  }
  
  constructor(private colorService: ColorsService) { }

  ngOnInit(): void {
    this.selectPage(1)
  }

  selectPage(n) {
    this.colorService.getColors(n).subscribe((color: Colors) => {
      this.pantone = color.data;
      console.log(this.pantone)
    })
  }

}
