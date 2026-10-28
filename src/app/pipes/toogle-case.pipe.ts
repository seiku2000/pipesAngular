import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toogleCase'
})
//piepetrasform sirve para transformar datos antes de mostrarlos en el html
export class ToogleCasePipe implements PipeTransform {
    transform(value: string, toupper: boolean = false): string {
        return toupper ? value.toUpperCase() : value.toLowerCase();
    }
}