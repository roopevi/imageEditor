import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import {ImageService} from './services/image.service';
import { FileComponent } from './file/file.component';
import { BrightContrastComponent } from './bright-contrast/bright-contrast.component';
import { ColorFilterComponent } from './color-filter/color-filter.component';
import { AutocontrastComponent } from './autocontrast/autocontrast.component';
import { GrayscaleConverterComponent } from './grayscale-converter/grayscale-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    FileComponent,
    BrightContrastComponent,
    ColorFilterComponent,
    AutocontrastComponent,
    GrayscaleConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
