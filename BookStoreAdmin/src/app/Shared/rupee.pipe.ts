import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'rs'
})

export class RupeePipe implements PipeTransform {

    constructor() { }

    transform(value: string): string {
        return `Rs ${value} `;
    }

}