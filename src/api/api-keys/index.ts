import {http} from '../../utils';
import {ApiInformation, ApiLimits, ScanHistory} from './interface';

export default class {
  private key: string;
  constructor(apiKey: string) {
    this.key = apiKey;
  }

  /**
   * Retrieve information about an apikey. For more information, [click here](https://onlinehelp.opswat.com/mdcloud/1.1_Apikey_info.html)
   * @return {Promise<ApiInformation>} Promise-like object containing information about `ApiInformation`
   */
  public info(): Promise<ApiInformation> {
    return new Promise<ApiInformation>((resolve, reject) => {
      http('GET', 'apikey', this.key)
        .then((r) => resolve(JSON.parse(r)))
        .catch(reject);
    });
  }

  /**
   * Retrieve information about the consumed limits for an apikey. Every time a request is made to an endpoint that consumes a specific limit, it will be reflected in this endpoint. It is the equivalent of the X-RateLimit-Used from the [response headers](https://onlinehelp.opswat.com/mdcloud/3._Rate_Limiting.html). For more information, [click here](https://onlinehelp.opswat.com/mdcloud/1.2_Apikey_limits.html)
   * @return {Promise<ApiLimits>} Promise-like object containing information about `ApiLimits`
   */
  public limits(): Promise<ApiLimits> {
    return new Promise<ApiLimits>((resolve, reject) => {
      http('GET', 'apikey/limits', this.key)
        .then((r) => resolve(JSON.parse(r)))
        .catch(reject);
    });
  }

  /**
   * Returns a paginated list of files uploaded by the user in reverse chronological order (newest to oldest). The pagination is controlled by the user (how many items per page and which page) by specifying the limit and offset query parameters in the request. For more information, [click here](https://onlinehelp.opswat.com/mdcloud/1.3_Apikey_scan_history.html)
   * @param {string} limit How many entries to return per request (default: `10000`)
   * @param {string} offset How many files to skip from the latest request (default: `0`)
   * @return {Promise<ScanHistory>} Promise-like object containing information about `ScanHistory`
   */
  public history(limit: string = '10000', offset: string = '0'): Promise<ScanHistory> {
    const qp = {
      limit,
      offset,
    };

    return new Promise<ScanHistory>((resolve, reject) => {
      http('GET', 'apikey/scan-history?' + new URLSearchParams(qp).toString(), this.key)
        .then((r) => resolve(JSON.parse(r)))
        .catch(reject);
    });
  }
}
