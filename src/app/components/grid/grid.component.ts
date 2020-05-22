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
  lasPantone: Color[];
  digito: number = 1;

  constructor(private colorService: ColorsService) { }

  ngOnInit(): void {
    this.selectPage(this.digito)
  }

  selectColor(color: Color) {
    this.colorService.sendColor(color)
  }

  selectPage(n) {
    if(n < 1) {
      n = 1;
    }

    this.digito = n;
    this.pantone = [];
    
    this.colorService.getColors(n).subscribe((color: Colors) => {
      if(color.data.length < 1) {
        alert("No existen mas páginas");
        this.pantone = this.lasPantone;
        this.digito -= 1;
        return false;
      }
      this.lasPantone = color.data;
      this.pantone = color.data;
    })
  }

}
