/**
 * @interface IApiInfoError
 */
interface IApiInfoError {
    code: number;
    messages: string[];
}

/**
 * @interface IApiInfoData
 */
interface IApiInfoData {
    max_upload_file_size: number;
    max_archive_file_size: number;
    max_archive_file_number: number;
    limit_prevention: number;
    limit_reputation: number;
    limit_sandbox: number;
    limit_feed: number;
    qos_scan: string;
    portal_api_key: string;
    created_at: string;
    nickname: string;
    time_interval: string;
    expiration_date: string;
    vulnerability_submissions: any[];
    votes: any[];
    workflow_rule: number;
    updated_at: string;
    source: string;
    paid_user: number;
}

/**
 * @export
 * @interface IApiInfo
 */
export interface IApiInfo {
    success: boolean;
    error?: IApiInfoError;
    data?: IApiInfoData;
}

/**
 * @interface IApiLimitsError
 */
interface IApiLimitsError {
    code: number;
    messages: string[];
}

/**
 * @interface IApiLimitsData
 */
interface IApiLimitsData {
    reputation_api: string;
    prevention_api: string;
    feed_api: number;
    download_file: number;
}

/**
 * @export
 * @interface IApiLimits
 */
export interface IApiLimits {
    success: boolean;
    error?: IApiLimitsError;
    data?: IApiLimitsData;
}
interface IHashLookupVotes {
    up: number;
    down: number;
}
interface IHashLookupProcessInfo {
    user_agent: string;
    result: string;
    progress_percentage: number;
    profile: string;
    file_type_skipped_scan: boolean;
    blocked_reason: string;
}
interface IHashLookupFileInfo {
    file_size: number;
    upload_timestamp: string;
    md5: string;
    sha1: string;
    sha256: string;
    file_type_category: string;
    file_type_description: string;
    file_type_extension: string;
    display_name: string;
}
interface IHashLookupScanResultsScanDetailsAV {
    wait_time: number;
    threat_found: string;
    scan_time: number;
    scan_result_i: number;
    def_time: string;
}
interface IHashLookupScanResultsScanDetails {
    [key: string]: IHashLookupScanResultsScanDetailsAV;
}
interface IHashLookupScanResults {
    scan_details: IHashLookupScanResultsScanDetails;
    rescan_available: boolean;
    data_id: string;
    scan_all_result_i: number;
    start_time: string;
    total_time: number;
    total_avs: number;
    total_detected_avs: number;
    progress_percentage: number;
    in_queue: number;
    scan_all_result_a: string;
}
export interface IHashLookup {
    scan_result_history_length: number;
    votes: IHashLookupVotes;
    file_id: string;
    data_id: string;
    archived: boolean;
    process_info: IHashLookupProcessInfo;
    scan_results: IHashLookupScanResults;
    file_info: IHashLookupFileInfo;
    top_threat: number;
    share_file: number;
    rest_version: string;
}
