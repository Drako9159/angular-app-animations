import { Component } from '@angular/core';
import { SocialMediaElement } from '../models/social-media.model';

@Component({
  selector: 'app-social-media-element',
  standalone: true,
  imports: [],
  templateUrl: './social-media-element.component.html',
  styleUrl: './social-media-element.component.scss',
})
export class SocialMediaElementComponent {
  socialMediaList: SocialMediaElement[] = [
    {
      name: 'Twitter',
      link: 'http://',
      imgPath: 'http://',
    },
    {
      name: 'Facebook',
      link: 'http://',
      imgPath: 'http://',
    },
    {
      name: 'Instagram',
      link: 'http://',
      imgPath: 'http://',
    },
  ];
}
