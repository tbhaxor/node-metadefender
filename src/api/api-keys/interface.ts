/* eslint-disable no-unused-vars */
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

export type History = {
  /**
   * The `data_id` of the file
   */
  data_id: string;
  file_info: {
    /**
     * The hash of the file
     */
    sha1: string;
    /**
     * The name of the file as provided by the owner
     */
    display_name: string;
  };
  scan_results: {
    /**
     * The total number of anti-malware engines that scanned this file
     */
    total_avs: number;
    /**
     * The total number of anti-malware engines that detected this file as being infected
     */
    total_detected_avs: number;
    /**
     * The scan results from multiscanning. See [scan result codes](https://onlinehelp.opswat.com/mdcloud/Description_on_scan_result_codes.html).
     */
    scan_all_result_i: ScanResult;
    /**
     * Time of scan
     */
    start_time: string;
  };
  sanitized: {
    /**
     * The data_id of the sanitized version of the file
     */
    data_id: string;
    /**
     * The result of the sanitized file
     */
    result: string;
    /**
     * If the file failed to sanitize, the reason is provided here.
     */
    reason: string;
  };
};

export interface ScanHistory {
  /**
   * An array of files scanned, sorted by latest scan first
   */
  data: History[];
}

export enum ScanResult {
  /**
   * No threat detection or the file is empty.
   */
  NO_THREAT_FOUND = 0,
  /**
   * A threat is found.
   */
  INFECTED,
  /**
   * Classified as a possible threat but not identified as a specific threat.
   */
  SUSPICIOUS,
  /**
   * Scanning is not fully performed (for example, invalid file or no read permission). If no engine is included and scan is enabled, this will be the final result.
   */
  FAILED_TO_SCAN,
  /**
   * The threat is found and the file is cleaned (repaired or deleted): repair is not supported yet.
   */
  DETECTED_AND_CLEANED,
  /**
   * Unknown signature. NOTE: this is only used in multiple hash lookup. For single hash lookup, `scan_result_*` are not returned as a response. see [3.1 Retrieving scan reports using a data](https://onlinehelp.opswat.com/mdcloud/3.1_Retrieving_scan_reports_using_a_data_hash.html) hash for more details.
   */
  UNKNOWN,
  /**
   * File is quarantined.
   */
  QUARANTINED,
  /**
   * Scan is skipped because this file type is in white-list.
   */
  SKIPPED_CLEAN,
  /**
   * Scan is skipped because this file type is in black-list.
   */
  SKIPPED_INFECTED,
  /**
   * Threat is not found but there are more archive levels which were not extracted.
   */
  EXCEEDED_ARCHIVE_DEPTH,
  /**
   * Scan is skipped by the engine either due to update or other engine specific reason. If the scan is disabled, this will be the final result.
   */
  NOT_SCANNED,
  /**
   * The current scan was stopped by the server.
   */
  ABORTED,
  /**
   * File/buffer is not scanned because the file type is detected as encrypted (password-protected).
   */
  ENCRYPTED,
  /**
   * The extracted archive is too large to scan.
   */
  EXCEEDED_ARCHIVE_SIZE,
  /**
   * There are more files in the archive than configured on the server.
   */
  EXCEEDED_ARCHIVE_FILE_NUMBER,
  /**
   * A document that is protected by a password
   */
  PASSWORD_PROTECTED_DOCUMENT,
  /**
   * The archive process reached the given timeout value.
   */
  EXCEEDED_ARCHIVE_TIMEOUT,
  /**
   * The file's extension does not match the detected file type. Only applicable when using workflows.
   */
  MISMATCH,
  /**
   * Possible vulnerability detected for the applied file.
   */
  POTENTIALLY_VULNERABLE,
  /**
   * The file scan was canceled because it failed to scan too many times
   */
  CANCELED,
  /**
   * Data loss prevention engine found sensitive data
   */
  SENSITIVE_DATA,
  /**
   * The analysis data matches a yara rule
   */
  YARA_RULE_MATCHED,
  /**
   * Returned by engines with PUA detection capabilities
   */
  POTENTIAL_UNWANTED_APPLICATION,
  /**
   * The engine does not support scanning this file type. Certain engines only scan specific file types such as executable files or documents
   */
  FILETYPE_NOT_SUPPORTED,
  /**
   * The file has been added to the scan queue and is waiting to be processed
   */
  IN_QUEUE = 254,
  /**
   * The scanning is in progress
   */
  IN_PROGRESS,
}
