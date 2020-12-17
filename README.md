# ngx-ordered-initializer

An Angular DI token that you can use to provide one or more initialization functions that will be executed in order

## Installation

```
npm install ngx-ordered-initializer
```

## Usage

```
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  orderedAppInitializer,
  ORDERED_APP_INITIALIZER,
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
    {
      provide: APP_INITIALIZER,
      useFactory: orderedAppInitializer,
      deps: [ORDERED_APP_INITIALIZER],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

The `orderedAppInitializer` factory will ensure that each initializer provided as `ORDERED_APP_INITIALIZER` will be executed in the declaration order.
