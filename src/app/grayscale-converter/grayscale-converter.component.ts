import {ImageService} from "../services/image.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grayscale-converter',
  templateUrl: './grayscale-converter.component.html',
  styleUrls: ['./grayscale-converter.component.css']
})
export class GrayscaleConverterComponent implements OnInit {

//red = 0.2126;
//green = 0.7152;
//blue = 0.0722;

  constructor(private imageService: ImageService) { }

  private grayscaleConverter = () => {
      for (var i = 0; i < this.imageService.numPixels; i += 4) {

        var avg = (this.imageService.numPixels[i] + this.imageService.numPixels[i + 2] + this.imageService.numPixels[i + 2]) / 3;

        this.imageService.numPixels[i] = avg; //red
        this.imageService.numPixels[i + 1] = avg; //green
        this.imageService.numPixels[i + 2] = avg; //blue

        this.imageService.context.clearRect(0, 0, this.imageService.canvas.width, this.imageService.canvas.height);
        this.imageService.context.putImageData(this.imageService.imageData, 0, 0);
     }
  }

  ngOnInit() {
    this.imageService.functions.grayscaleConverter = this.grayscaleConverter;
  }

}
