import request = require('request');
import { IAndroid, IApplicationInformation, IEXIF, IPE } from './interfaces';

class ApplicationInformation {
    private api: string;
    constructor(api: string) {
        this.api = api;
    }
    public applicationInformation(hash: string): Promise<IApplicationInformation> {
        return new Promise((resolve, reject) => {
            request.get(
                `https://api.metadefender.com/v4/appinfo/${hash}`,
                { headers: { apikey: this.api } },
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
    public exifLookup(hash: string): Promise<IEXIF> {
        return new Promise((resolve, reject) => {
            request.get(
                `https://api.metadefender.com/v4/hash/${hash}/exif`,
                { headers: { apikey: this.api } },
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
    public peInfoLookup(hash: string): Promise<IPE> {
        return new Promise((resolve, reject) => {
            request.get(
                `https://api.metadefender.com/v4/hash/${hash}/peinfo`,
                { headers: { apikey: this.api } },
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
    public androidManifest(hash: string): Promise<IAndroid> {
        return new Promise((resolve, reject) => {
            request.get(
                `https://api.metadefender.com/v4/hash/${hash}/apk-manifest`,
                { headers: { apikey: this.api } },
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
}

export default ApplicationInformation;
