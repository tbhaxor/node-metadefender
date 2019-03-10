import request = require('request');
import { IIPReputation, IURLReputation } from './interfaces';

class ReputationService {
    private api: string;
    constructor(api: string) {
        this.api = api;
    }

    public ipReputation(ip: string): Promise<IIPReputation> {
        return new Promise((resolve, reject) => {
            request.get(
                `https://api.metadefender.com/v3/ip/${ip}`,
                {
                    headers: {
                        Authorization: `apikey ${this.api}`
                    }
                },
                (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        // tslint:disable-next-line: no-unsafe-any
                        resolve(JSON.parse(res.body));
                    }
                }
            );
        });
    }
    public urlReputation(url: string): Promise<IURLReputation> {
        return new Promise((resolve, reject) => {
            request.get(
                `https://api.metadefender.com/v3/url/${url}`,
                {
                    headers: {
                        Authorization: `apikey ${this.api}`
                    }
                },
                (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        // tslint:disable-next-line: no-unsafe-any
                        resolve(JSON.parse(res.body));
                    }
                }
            );
        });
    }
    public domainReputation(domain: string): Promise<any> {
        return new Promise((resolve, reject) => {
            request.get(
                `https://api.metadefender.com/v3/domain/${domain}`,
                {
                    headers: {
                        Authorization: `apikey ${this.api}`
                    }
                },
                (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        // tslint:disable-next-line: no-unsafe-any
                        resolve(JSON.parse(res.body));
                    }
                }
            );
        });
    }

    public ipsReputation(ips: string[]): Promise<any> {
        return new Promise((resolve, reject) => {});
    }
    public urlsReputation(urls: string[]): Promise<any> {
        return new Promise((resolve, reject) => {});
    }
    public domainsReputation(domains: string[]): Promise<any> {
        return new Promise((resolve, reject) => {});
    }
}

export { ReputationService };
