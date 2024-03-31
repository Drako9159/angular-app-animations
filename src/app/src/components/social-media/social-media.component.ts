import { Component } from '@angular/core';
import { SocialMediaElementComponent } from './social-media-element/social-media-element.component';
import { SocialMediaElement } from './models/social-media.model';
import { MainContainerComponent } from '../layout/main-container/main-container.component';
import { WobbleDirective } from '../directives/wobble.directive';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [SocialMediaElementComponent, MainContainerComponent, WobbleDirective],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {

  socialMediaList: SocialMediaElement[] = [
    {
      name: 'Twitter',
      link: 'http://',
      imgPath: 'https://cdn.icon-icons.com/icons2/122/PNG/512/twitter_socialnetwork_20007.png',
    },
    {
      name: 'Facebook',
      link: 'http://',
      imgPath: 'https://cdn.icon-icons.com/icons2/122/PNG/512/twitter_socialnetwork_20007.png',
    },
    {
      name: 'Instagram',
      link: 'http://',
      imgPath: 'https://cdn.icon-icons.com/icons2/122/PNG/512/twitter_socialnetwork_20007.png',
    },
  ];

}
