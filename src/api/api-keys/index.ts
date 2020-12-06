import {http} from '../../utils';
import {ApiInformation, ApiLimits} from './interface';

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
}
