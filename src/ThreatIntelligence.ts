import request = require('request');
import { IThreatIntelligence } from './interfaces';

class ThreatIntelligenceFeed {
    private api: string;
    constructor(api: string) {
        this.api = api;
    }

    public feed(page?: number): Promise<IThreatIntelligence> {
        return new Promise((resolve, reject) => {
            request.get(
                `https://api.metadefender.com/v4/feed/infected?type=json&page=${page ? page : 1}`,
                {
                    headers: {
                        apikey: this.api
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
}

export default ThreatIntelligenceFeed;
