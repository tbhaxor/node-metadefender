import request = require('request');
import { IEngineDefinition, IVersion } from './interfaces';

class Status {
    // tslint:disable-next-line: no-empty
    constructor() {}

    public version(): Promise<IVersion> {
        return new Promise((resolve, reject) => {
            request.get('https://api.metadefender.com/v4/status/version', (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    // tslint:disable-next-line: no-unsafe-any
                    resolve(JSON.parse(res.body));
                }
            });
        });
    }
    public engineDefinition(): Promise<IEngineDefinition> {
        return new Promise((resolve, reject) => {
            request.get('https://api.metadefender.com/v4/status/enginedef', (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    // tslint:disable-next-line: no-unsafe-any
                    resolve(JSON.parse(res.body));
                }
            });
        });
    }
}

export default Status;
