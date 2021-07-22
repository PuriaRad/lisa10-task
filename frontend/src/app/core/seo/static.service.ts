import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StaticService {
  constructor() {}
  public staticMeta: any = {
    '/': {
      title: 'Lisa10 dashboard',
      description: 'Lisa10 dashboard',
      keywords: '',
      imageSrc: '',
      ogtype: 'website',
      domain: '',
      follow: true,
    },
    '/registration': {
      title: 'Lisa10 registration',
      description: 'Lisa10 registration',
      keywords: '',
      imageSrc: '',
      ogtype: 'website',
      domain: '',
      follow: true,
    },
    '/welcome': {
      title: 'Lisa10 welcome',
      description: 'Lisa10 welcome',
      keywords: '',
      imageSrc: '',
      ogtype: 'website',
      domain: '',
      follow: true,
    },
  };
}
