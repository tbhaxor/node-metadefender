import * as request from 'request';
import { IApiInfo, IApiLimits } from './interfaces';

class MetaDefender {
    private api: string;
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
}
export default MetaDefender;
