import request = require('request');
import { IFileScan, IRepositoryScan, IRescanFile, IRescanFiles, IScanReport } from './interfaces';

class FileScanning {
    private api: string;
    constructor(api: string) {
        this.api = api;
    }
    public scan(
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
    public reports(dataId: string, file_metadata?: boolean): Promise<IScanReport> {
        return new Promise((resolve, reject) => {
            request.get(
                `https://api.metadefender.com/v4/file/${dataId}`,
                { headers: { apikey: this.api, file_metadata } },
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

    public rescan(fileId: string): Promise<IRescanFile> {
        return new Promise((resolve, reject) => {
            request.get(
                `https://api.metadefender.com/v4/file/${fileId}/rescan`,
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

    public rescanMultiple(fileIds: string[]): Promise<IRescanFiles> {
        return new Promise((resolve, reject) => {
            request.post(
                `https://api.metadefender.com/v4/file/rescan`,
                { headers: { apikey: this.api }, body: JSON.stringify({ file_ids: fileIds }) },
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

    public repository(
        source: 'github' | 'bitbucket' | 'gitlab',
        username: string,
        ref: string,
        repository: string
    ): Promise<IRepositoryScan> {
        return new Promise((resolve, reject) => {
            request.post(
                'https://api.metadefender.com/v4/repo',
                {
                    body: JSON.stringify({
                        ref,
                        repository,
                        source,
                        username
                    }),
                    headers: { apikey: this.api, 'Content-Type': 'application/json' }
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

export default FileScanning;
