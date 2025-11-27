import "../styles/main.scss";

import { BackTopButton } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import Scroll  from "./services/scroll";

document.addEventListener("DOMContentLoaded", (): void => {
  new BackTopButton(500, "home");

  AOS.init({
    duration: 600,
    once: true,
  });

  new Scroll().initSmoothScroll();
});
