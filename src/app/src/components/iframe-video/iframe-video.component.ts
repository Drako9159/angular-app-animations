import { Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MainContainerComponent } from '../layout/main-container/main-container.component';

@Component({
  selector: 'app-iframe-video',
  standalone: true,
  imports: [MainContainerComponent],
  templateUrl: './iframe-video.component.html',
  styleUrl: './iframe-video.component.scss',
})
export class IframeVideoComponent {
  domSanitizer = inject(DomSanitizer);

  @Input() set videoSrc(value: string) {
    this._videoSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

  _videoSrc: SafeResourceUrl = '';

}
