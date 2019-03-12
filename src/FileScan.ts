import request = require('request');
import { IFileScan, IScanReport } from './interfaces';

class FileScanning {
    private api: string;
    constructor(api: string) {
        this.api = api;
    }
    public scanFile(
        filename: string,
        archivepwd?: string,
        samplesharing?: boolean,
        activateWorkflow?: boolean
    ): Promise<IFileScan> {
        const headers = {
            apikey: this.api,
            archivepwd,
            filename,
            rule: activateWorkflow ? 'sanitize' : '',
            samplesharing: samplesharing ? 1 : 0
        };
        return new Promise((resolve, reject) => {
            request.post(
                'https://api.metadefender.com/v4/file',
                {
                    body: `
                ----WebKitFormBoundary7MA4YWxkTrZu0gW
                Content-Disposition: form-data; name=""; filename="${filename}"
                Content-Type: multipart/form-data

                ----WebKitFormBoundary7MA4YWxkTrZu0gW
                `,
                    headers
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

    // tslint:disable-next-line: variable-name
    public scanReports(dataId: string, file_metadata?: boolean): Promise<IScanReport> {
        return new Promise((resolve, reject) => {
            request.get(
                `https://api.metadefender.com/v4/file/${dataId}`,
                { headers: { apikey: this.api, file_metadata } },
                (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(JSON.parse(res.body));
                    }
                }
            );
        });
    }
}

export default FileScanning;
