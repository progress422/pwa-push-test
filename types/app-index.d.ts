import { LitElement } from 'lit';
import './pages/app-home';
import './components/header';
import './styles/global.css';
export declare class AppIndex extends LitElement {
    private fcmToken;
    static styles: import("lit").CSSResult;
    firstUpdated(): void;
    getTokenValue(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
