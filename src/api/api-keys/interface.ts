export interface ApiInformation {
  /**
   * The maximum upload size for files (expressed in MB)
   */
  max_upload_file_size: number;
  /**
   * The maximum upload size for archives (expressed in MB)
   */
  max_archive_file_size: number;
  /**
   * The maximum number of files contained in an archive
   */
  max_archive_file_number: number;
  /**
   * The limit corresponding to Prevention API
   */
  limit_prevention: number;
  /**
   * The limit corresponding to Reputation API
   */
  limit_reputation: number;
  /**
   * The limit corresponding to Sandbox API
   */
  limit_sandbox: number;
  /**
   * The limit corresponding to Feed API
   */
  limit_feed: number;
  /**
   * The selected scan queue, based on the apikey type
   */
  qos_scan: string;
  /**
   * The last date when the apikey information was updated
   */
  updated_at: string;
  /**
   * The date when the apikey was created
   */
  created_at: string;
  /**
   * The queried apikey
   */
  portal_api_key: string;
  /**
   * The expiration date of the apikey (if this is in the future, it means that this is a paid apikey)
   */
  expiration_date: string;
  /**
   * The reset interval for the apikey limits
   */
  time_interval: string;
  /**
   * The nickname of the user correlated to the queried apikey
   */
  nickname: string;
}

export interface ApiLimits {
  /**
   * The limit used for Reputation API
   */
  reputation_api: number;
  /**
   * The limit used for Prevention API
   */
  prevention_api: string;
  /**
   * The limit corresponding to Feed API
   */
  feed_api: number;
  /**
   * The limit corresponding to Sandbox API
   */
  sandbox_api: string;
}
