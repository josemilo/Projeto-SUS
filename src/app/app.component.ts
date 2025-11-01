import { Component } from '@angular/core';
import { addIcons } from 'ionicons'; 
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { 
  settings,
  phonePortraitOutline,
  calendarOutline, 
  pulseOutline,
  documentTextOutline, 
  eyedropOutline, 
  addCircleOutline, 
  mapOutline, 
  home, 
  apps, 
  medkit, 
  person, 
  locationOutline, 
  calendarNumberOutline, 
  statsChartOutline, 
  businessOutline,
  grid, 
  megaphone,
  medkitOutline,
  cardOutline,
  documentAttachOutline,
  bugOutline,
  bookOutline,
  arrowBack
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  
  constructor() {

    document.body.setAttribute('color-theme', 'light');
    
    addIcons({
      settings,
      phonePortraitOutline,
      calendarOutline,
      pulseOutline,
      documentTextOutline,
      eyedropOutline,
      addCircleOutline,
      mapOutline,
      home,
      apps,
      medkit,
      person,
      locationOutline,
      calendarNumberOutline,
      statsChartOutline,
      businessOutline,
      grid,
      megaphone,
      medkitOutline,
      cardOutline,
      documentAttachOutline,
      bugOutline,
      bookOutline,
      arrowBack
    });
  }
}