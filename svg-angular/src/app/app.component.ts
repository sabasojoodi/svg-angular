import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'svg-angular';

  elements = [
    {
      icon: '../../../assets/sidebar-icons/1.svg',
      description: 'Tableau de bord',
      svg: '#icon_home',
    },
    {
      icon: '../../../assets/sidebar-icons/2.svg',
      description: 'Dossiers',
      svg: '#icon_file',
    },
    {
      icon: '../../../assets/sidebar-icons/3.svg',
      description: 'Session',
      svg: '#icon_date',
    },
  ];
}
