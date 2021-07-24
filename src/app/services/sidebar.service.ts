import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuItems: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo:'Main', url: '/'},
        {titulo:'ProgressBar', url: 'progress'},
        {titulo:'Charts', url: 'chart'}
      ]
    }
  ]
  constructor() { }

}
