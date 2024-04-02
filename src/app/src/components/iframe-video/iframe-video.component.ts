import { Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-video',
  standalone: true,
  imports: [],
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
