/**
 * @interface IApiInfoError
 */
interface IError {
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
    error?: IError;
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

/**
 * @interface IHashLookupVotes
 */
interface IHashLookupVotes {
    up: number;
    down: number;
}

/**
 * @interface IHashLookupProcessInfo
 */
interface IHashLookupProcessInfo {
    user_agent: string;
    result: string;
    progress_percentage: number;
    profile: string;
    file_type_skipped_scan: boolean;
    blocked_reason: string;
}

/**
 * @interface IHashLookupFileInfo
 */
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

/**
 * @interface IHashLookupScanResultsScanDetailsAV
 */
interface IHashLookupScanResultsScanDetailsAV {
    wait_time: number;
    threat_found: string;
    scan_time: number;
    scan_result_i: number;
    def_time: string;
}

/**
 * @interface IHashLookupScanResultsScanDetails
 */
interface IHashLookupScanResultsScanDetails {
    [key: string]: IHashLookupScanResultsScanDetailsAV;
}

/**
 * @interface IHashLookupScanResults
 */
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

/**
 * @export
 * @interface IHashLookup
 */
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

/**
 * @export
 * @interface IFileBadgeOptions
 */
export interface IFileBadgeOptions {
    size?: string;
    type?: string;
}

/**
 * @export
 * @interface IHashLookups
 */
export interface IHashLookups {
    data_id: string;
    scan_result_i: number;
    hash: string;
    scan_details?: IHashLookupScanResultsScanDetails;
}

/**
 * @interface IScanHistoryData
 */
interface IScanHistoryData {
    total_detected_avs: number;
    total_avs: number;
    scan_all_result_i: number;
    start_time: string;
    data_id: string;
}

/**
 * @export
 * @interface IScanHistory
 */
export interface IScanHistory {
    success: boolean;
    error?: IError;
    data?: IScanHistoryData;
}

interface IIPReputationDataScanResultsResult {
    alternativeid: string;
    assessment: string;
    confident: number;
    detecttime: string;
    updatetime: string;
    result: string;
}
interface IIPReputationDataScanResult {
    source: string;
    results: IIPReputationDataScanResultsResult[];
}

interface IIPReputationData {
    start_time: string;
    scan_results: IIPReputationDataScanResult[];
    detected_by: number;
    address: string;
    geo_info: IIPReputationDataGeoInfo;
}
interface IIPReputationDataGeoInfoContinent {
    code: string;
    geoname_id: number;
    names: object;
}
interface IIPReputationDataGeoInfoCountry {
    geoname_id: number;
    iso_code: string;
    names: object;
}
interface IIPReputationDataGeoInfoLocation {
    latitude: number;
    longitude: number;
    time_zone: string;
}
interface IIPReputationDataGeoInfoRegisteredCountry {
    geoname_id: number;
    iso_code: string;
    names: object;
}
interface IIPReputationDataGeoInfo {
    continent: IIPReputationDataGeoInfoContinent;
    country: IIPReputationDataGeoInfoCountry;
    location: IIPReputationDataGeoInfoLocation;
    registered_country: IIPReputationDataGeoInfoRegisteredCountry;
}
export interface IIPReputation {
    err?: string;
    success?: boolean;
    data?: IIPReputationData;
}
interface IURLReputationDataScanResultResult {
    alternativeid: string;
    assessment: string;
    confident: number;
    detecttime: string;
    updatetime: string;
    result: string;
}
interface IURLReputationDataScanResult {
    source: string;
    results: IURLReputationDataScanResultResult[];
}
interface IURLReputationData {
    start_time: string;
    detected_by: number;
    url: string;
    scan_results: IURLReputationDataScanResult[];
}
export interface IURLReputation {
    success: boolean;
    error?: IError;
    data?: IURLReputationData;
}

interface IDomainReputationDataScanResultResult {
    alternativeid: string;
    assessment: string;
    confident: string;
    detecttime: string;
    updatetime: string;
    result: string;
}
interface IDomainReputationDataScanResult {
    source: string;
    results: IDomainReputationDataScanResultResult[];
}
interface IDomainReputationData {
    start_time: string;
    detected_by: number;
    domain: string;
    scan_results: IDomainReputationDataScanResult[];
}
export interface IDomainReputation {
    success: boolean;
    error?: IError;
    data?: IDomainReputationData;
}
