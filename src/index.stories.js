import "@lwc/synthetic-shadow";
import "https://unpkg.com/@salesforce-ux/design-system@2.21.2-fix/assets/styles/salesforce-lightning-design-system.min.css";
import { createElement } from "lwc";
import App from "./app";

export const story = () => createElement("c-app", { is: App });
