import { Injectable, computed, signal } from "@angular/core";
export type languageOptions = 'en-CA' | 'es-MX';
@Injectable({
    providedIn: 'root'
})


export class LocaleService {
    currentLocal = signal<languageOptions>('es-MX');

    constructor() {
        this.currentLocal.set((
            localStorage.getItem('locale') as languageOptions
        ) ?? 'es-MX');
    }



    get getcurrentLocale(): languageOptions {
        return this.currentLocal();
    }

    public changeLocal(locale: languageOptions) {
        localStorage.setItem('locale', locale);
        // console.log(locale);
        this.currentLocal.set(locale);
        window.location.reload();
    }


}
