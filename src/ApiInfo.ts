import request = require('request');
import { IApiInfo, IApiLimits } from './interfaces';

class ApiInfo {
    private api: string;
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
}

export default ApiInfo;
