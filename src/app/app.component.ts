import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
    
        let historyJson = localStorage.getItem('history')
        let history: Array<any> = []
        if (historyJson) {
          history = JSON.parse(historyJson)
        }
        
        history.push(event)
        localStorage.setItem('history', JSON.stringify(history))
        console.log('NavigationEnd:', event);
      }
    });

  }
}

