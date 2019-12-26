import { Injectable } from '@angular/core';
import { Devices } from './device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetailsService {
  private Deviceslist: Devices[] = [
    {
      id: 'id1',
      title: 'BedRoom1',
      image: './assets/images/gallery.jpg',
      defaultValue: '0'
   },
   {
    id: 'id2',
    title: 'BedRoom2',
    image: './assets/images/bedroom1.jpg',
    defaultValue: '0'
   },
   {
   id: 'id3',
   title: 'Hall',
   image: './assets/images/bedroom2.jpg',
   defaultValue: '0'
   },
   {
    id: 'id4',
    title: 'Kitchen',
    image: './assets/images/bathroom.jpg',
    defaultValue: '0'
    },
    {
      id: 'id5',
      title: 'Gallary',
      image: './assets/images/hall.jpg',
      defaultValue: '0'
      },
      {
        id: 'id6',
        title: 'Roof',
        image: './assets/images/rooftop.jpg',
        defaultValue: '0'
        }
  ];

  constructor() { }
  getAllDevices() {
    return [...this.Deviceslist];
  }

  getDevice(recipeId: string) {
   return {...this.Deviceslist.find(
    recipe => {
       debugger
      return ("device" + recipe.id) === (recipeId);
    }
   )};
   
  }
}
