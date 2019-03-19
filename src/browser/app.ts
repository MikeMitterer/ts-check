import lambi from '../site/images/lambi.png';
import { loggerFactory } from './config/ConfigLog4j';

const query = (selector: string): HTMLElement => document.querySelector(selector) as HTMLElement;

export function main(): void {
    // Retrieve a logger (you can decide to use it per class and/or module or just
    // export it in the config above etc. Your loggers - your choice!).
    // This logger will fall in the first LogGroupRule from above.
    const logger = loggerFactory.getLogger('main');

    query('#tstest').onclick = (event: MouseEvent): void => {
        alert(`Hi Mike, event '${event.type}' occurred!!`);
    };

    const divs = Array.from(document.getElementsByTagName('div'));

    divs.forEach((div: HTMLDivElement) => {
        div.addEventListener('click', (evt: MouseEvent) => {
            evt = new MouseEvent('aaa');
            logger.info(JSON.stringify(evt));
        });
    });

    logger.debug(`Lambi: ${JSON.stringify(lambi)}`);
    const img = query('#frontImg') as HTMLImageElement;
    img.src = lambi;

    const body = query('body') as HTMLBodyElement;
    body.classList.remove('loading');
    body.classList.add('loaded');

    // logger.info(`Done!!!! ${os.platform()}`);
    logger.info(`Done!!!!`);
}
