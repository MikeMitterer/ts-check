import * as fs from 'fs';
import * as process from 'process';
import { loggerFactory } from '../main/config/ConfigLog4j';

// import sayMyName from './fs-part';

const pkg = fs.readFileSync('package.json');
const pwd = process.cwd();
const logger = loggerFactory.getLogger('main');

logger.info(pkg.toString());
logger.info(pwd);

class Name {
    constructor(public readonly firstname: string, public readonly lastname: string) {}

    public get name() {
        return `${this.firstname} ${this.lastname}`;
    }
}

const name = new Name('Mike', 'Mitterer');
logger.info(name.name);
