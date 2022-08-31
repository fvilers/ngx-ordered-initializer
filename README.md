# ngx-ordered-initializer

An Angular DI token that you can use to provide one or more initialization functions that will be executed in order

## Installation

```
npm install ngx-ordered-initializer
```

## Versions

- Angular 11: 1.0.0
- Angular 12: 2.0.0
- Angular 14: 4.0.0

## Usage

```
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ORDERED_APP_INITIALIZER,
  ORDERED_APP_PROVIDER,
} from 'ngx-ordered-initializer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: ORDERED_APP_INITIALIZER,
      useFactory: initializer1,
      multi: true,
    },
    {
      provide: ORDERED_APP_INITIALIZER,
      useFactory: initializer2,
      multi: true,
    },
    ORDERED_APP_PROVIDER,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

The `ORDERED_APP_PROVIDER` will ensure that each initializer provided as `ORDERED_APP_INITIALIZER` will be executed in the declaration order.

## Demo

https://stackblitz.com/edit/ngx-ordered-initializer-demo
