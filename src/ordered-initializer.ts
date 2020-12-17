import { APP_INITIALIZER, InjectionToken } from "@angular/core";
import { isPromise } from "./helpers";

export const ORDERED_APP_INITIALIZER = new InjectionToken(
  "Ordered Application Initializer"
);

export function orderedAppInitializer(appInits: (() => any)[]) {
  return async (): Promise<void> => {
    for (const initializer of appInits) {
      const result = initializer();

      if (isPromise(result)) {
        await result;
      }
    }
  };
}

export const ORDERED_APP_PROVIDER = {
  provide: APP_INITIALIZER,
  useFactory: orderedAppInitializer,
  deps: [ORDERED_APP_INITIALIZER],
  multi: true,
};
