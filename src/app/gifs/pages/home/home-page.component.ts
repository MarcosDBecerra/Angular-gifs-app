import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { GifsModule } from '../../gifs.module';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page-home',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor( private gifsService: GifsService) {}


  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
