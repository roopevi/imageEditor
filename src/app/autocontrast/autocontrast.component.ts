import { ImageService } from './../services/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocontrast',
  templateUrl: './autocontrast.component.html',
  styleUrls: ['./autocontrast.component.css']
})
export class AutocontrastComponent implements OnInit {



  constructor(private imageService: ImageService) { }

  //formula for autcontrast: Po = (P - mi)/(ma - mi) * 255;

  private autoContrast = () => {
    for (var i = 0; i < this.imageService.numPixels; i++) {


      this.imageService.context.clearRect(0, 0, this.imageService.canvas.width, this.imageService.canvas.height);
      this.imageService.context.putImageData(this.imageService.imageData, 0, 0);

    }
  }

  ngOnInit() {
  }

}
