import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'locationFilter' })
export class LocationFilterPipe implements PipeTransform {
    transform( items : any[], locationText : string) : any[]{
        if (!items) {
            return [];
        }
        if (!locationText) {
            return items;
        }
        locationText = locationText.toLocaleLowerCase();

        return items.filter(iter => {
            return iter.city.toLocaleLowerCase().includes(locationText);
        })
    }
}