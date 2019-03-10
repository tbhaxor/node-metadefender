import * as request from 'request';
import { IApiInfo, IApiLimits, IHashLookup } from './interfaces';

class MetaDefender {
    protected api: string;
    constructor(api: string) {
        this.api = api;
    }

    public getApiInfo(): Promise<IApiInfo> {
        return new Promise((resolve, reject) => {
            request.get(
                `https://api.metadefender.com/v3/apikey/${this.api}`,
                {
                    headers: {
                        Authorization: `apikey ${this.api}`
                    }
                },
                (err, resp) => {
                    if (err) {
                        reject(err);
                    } else {
                        // tslint:disable-next-line: no-unsafe-any
                        resolve(JSON.parse(resp.body));
                    }
                }
            );
        });
    }

    public getApiLimits(): Promise<IApiLimits> {
        return new Promise((resolve, reject) => {
            request.get(
                'https://api.metadefender.com/v3/apikey/limits',
                {
                    headers: {
                        Authorization: `apikey ${this.api}`
                    }
                },
                (err, resp) => {
                    if (err) {
                        reject(err);
                    } else {
                        // tslint:disable-next-line: no-unsafe-any
                        resolve(JSON.parse(resp.body));
                    }
                }
            );
        });
    }

    public hashLookup(hash: string): Promise<IHashLookup> {
        return new Promise((resolve, reject) => {
            const header = {
                apikey: this.api
            };
            request.get(
                `https://api.metadefender.com/v2/hash/${hash}`,
                {
                    headers: header
                },
                (err, resp) => {
                    if (err) {
                        reject(err);
                    } else {
                        // tslint:disable-next-line: no-unsafe-any
                        const body: string = resp.body;
                        if (body.includes('Not Found')) {
                            reject(new Error('Not Found'));
                        } else {
                            // tslint:disable-next-line: no-unsafe-any
                            resolve(JSON.parse(body));
                        }
                    }
                }
            );
        });
    }
}

export default MetaDefender;
