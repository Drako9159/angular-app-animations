import { Component } from '@angular/core';
import { IframeVideoComponent } from '../components/iframe-video';
import { MainContainerComponent } from '../components/layout/main-container/main-container.component';

@Component({
  selector: 'app-trailer-video',
  standalone: true,
  imports: [IframeVideoComponent, MainContainerComponent],
  templateUrl: './trailer-video.component.html',
  styleUrl: './trailer-video.component.scss'
})
export class TrailerVideoComponent {
  videoSrc = "https://www.youtube.com/embed/tgbNymZ7vqY"
}
