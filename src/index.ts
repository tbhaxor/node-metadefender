import { stringify as querify } from 'querystring';
import * as request from 'request';
import { IApiInfo, IApiLimits, IFileBadgeOptions, IHashLookup, IHashLookups, IScanHistory } from './interfaces';

class MetaDefender {
    protected api: string;
    constructor(api: string) {
        this.api = api;
    }

    public getApiInfo(): Promise<IApiInfo> {
        // tslint:disable-next-line: no-shadowed-variable
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
        // tslint:disable-next-line: no-shadowed-variable
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

    public multipleHashLookup(hashes: string[], scanDetails?: boolean): Promise<IHashLookups> {
        // tslint:disable-next-line: no-shadowed-variable
        return new Promise((resolve, reject) => {
            const header = {
                apikey: this.api,
                include_scan_details: 0
            };
            header['content-type'] = 'application/json';
            header.include_scan_details = scanDetails ? 1 : 0;
            request.post(
                `https://api.metadefender.com/v2/hash`,
                {
                    body: JSON.stringify({ hash: hashes }),
                    headers: header
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
    public scanHistory(hash: string, limit: number, offset: number): Promise<IScanHistory> {
        return new Promise((resolve, reject) => {
            const query: object = {
                limit,
                offset
            };
            request.get(
                `https://api.metadefender.com/v3/hash/${hash}/scanhistory?${querify(query)}`,
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
    public fileBadge(hash: string, options?: IFileBadgeOptions): Promise<any> {
        return Promise.resolve(`https://api.metadefender.com/v4/hash/${hash}/badge?${querify(options)}`);
    }
}

export default MetaDefender;
