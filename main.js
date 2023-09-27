import './src/css/style.css';
import './src/css/toggle.css';
import './src/css/modern-normalize.css';
import './src/css/header.css';
import './src/css/hero.css';
import './src/css/service.css';
import './src/css/experience.css';
import './src/css/works.css';
import './src/css/projects.css';
import './src/css/clients.css';
import './src/css/contact.css';
import './src/css/footer.css';

import heroProcess from './src/js/hero';
import ServiceFunction from './src/js/service';
import toggle from './src/js/toggle';
import Works from './src/js/works';
import projects from './src/js/project';
import clients from './src/js/clients';
import lazyLoading from './src/js/lazy-loading';



Works();
toggle();
heroProcess();
ServiceFunction();
projects();
clients();
lazyLoading();
