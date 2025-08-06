import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './pages/app-home';
import './components/header';
import './styles/global.css';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyB0iuZzabjCGefy9OokK6UFxOvF6jJaTAU',
  authDomain: 'push-notifications-test-4bdb0.firebaseapp.com',
  projectId: 'push-notifications-test-4bdb0',
  storageBucket: 'push-notifications-test-4bdb0.firebasestorage.app',
  messagingSenderId: '158709240339',
  appId: '1:158709240339:web:e5b363e9773e5abed1e5e6',
  vapidKey:
    'BMuqicDEKYewQecSiObnuJ8cV2Gd3E8lOSzE8wrTaBtTMuR6-66N4z3abqmxJZQ84U7VcXT08PaRHjp3Gk4f00o',
};

@customElement('app-index')
export class AppIndex extends LitElement {
  @state()
  private fcmToken: string = '';

  static styles = css`
    main {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }
  `;

  firstUpdated() {
    this.getTokenValue();
  }

  async getTokenValue() {
    if ('serviceWorker' in navigator) {
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);
      const registration = await navigator.serviceWorker.register('/sw.js');
      if (registration) {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          console.log('Notification permission granted.');

          // Get FCM Token (THIS IS WHAT YOU WANT)
          const token = await getToken(messaging, {
            vapidKey: firebaseConfig.vapidKey,
            serviceWorkerRegistration: registration,
          });
          if (token) {
            this.fcmToken = token;
          }
          console.log(token, 'token');
        }
      }
    }
  }

  render() {
    return html` <h2>${this.fcmToken}</h2> `;
  }
}

