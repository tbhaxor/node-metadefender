import APIKey from './api/api-keys';

export default class Metadefender {
  /**
   * The apikey is used for all API requests to MetaDefender Cloud service.
   */
  public apiKey: APIKey;

  /**
   * Constructor for metadefender api
   * @param {string} key API Key
   */
  constructor(key: string) {
    this.apiKey = new APIKey(key);
  }
}
