// Styles für die gesamte Web-App
import '../site/styles/main.scss';

import { main } from './app';
import { loggerFactory } from './config/ConfigLog4j';

function everythingIsReady() {
    const logger = loggerFactory.getLogger('done');

    logger.info(`everythingIsReady!`);
    main();
}

function domIsReady() {
    const logger = loggerFactory.getLogger('done');

    logger.info(`domIsReady!`);
}

if (typeof window !== 'undefined') {
    // Mehr: https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
    const domIsReadyState = setInterval(() => {
        if (/interactive/.test(document.readyState)) {
            clearInterval(domIsReadyState);
            domIsReady(); // this is the function that gets called when everything is loaded
        }
    }, 10);

    const everythingLoadedState = setInterval(() => {
        if (/loaded|complete/.test(document.readyState)) {
            clearInterval(everythingLoadedState);
            everythingIsReady(); // this is the function that gets called when everything is loaded
        }
    }, 10);
}
