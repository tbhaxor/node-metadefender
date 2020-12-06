import https from 'https';

type HttpMethod = 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH' | 'OPTIONS';
export function http(method: HttpMethod, endpoint: string, key: string, body?: string): Promise<string> {
  return new Promise<string>(function (resolve, reject) {
    if (!/^[a-z0-9]{32}$/.test(key)) {
      return reject(new Error('API key is invalid'));
    }

    const options: https.RequestOptions = {
      hostname: 'api.metadefender.com',
      port: '443',
      path: '/v4/' + endpoint,
      method,
      headers: {'Content-Type': 'application/json', 'apikey': key},
    };

    const req = https
      .request(options, function (res) {
        res.setEncoding('utf-8');
        let body = '';

        res.on('error', reject);
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          const r = JSON.parse(body);

          if ('error' in r) {
            reject(body);
          } else {
            resolve(body);
          }
        });
      })
      .on('error', reject);

    if (!['GET', 'DELETE'].includes(method)) {
      req.write(body);
    }
    req.end();
  });
}
