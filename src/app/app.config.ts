import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import localEsMx from '@angular/common/locales/es-MX';
import localeEsCa from '@angular/common/locales/en-CA';
import { registerLocaleData } from '@angular/common';
import { LocaleService } from './services/local.service';

registerLocaleData(localEsMx, 'es-MX');
registerLocaleData(localeEsCa, 'en-CA');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: LOCALE_ID,//Se encarga de manejar el idioma
      deps: [LocaleService],//se encarga de que se pueda usar el servicio
      useFactory: (localeService: LocaleService) => localeService.getcurrentLocale//se encarga de obtener el idioma actual


    }
  ]
};
