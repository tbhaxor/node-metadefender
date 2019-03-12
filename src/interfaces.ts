import { FILE_TYPES } from '.';

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
    file_type_category: FILE_TYPES;
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
    name: object;
}
interface IIPReputationDataGeoInfoCountry {
    geoname_id: number;
    iso_code: string;
    name: object;
}
interface IIPReputationDataGeoInfoLocation {
    latitude: number;
    longitude: number;
    time_zone: string;
}
interface IIPReputationDataGeoInfoRegisteredCountry {
    geoname_id: number;
    iso_code: string;
    name: object;
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
interface IIPReputationsData {
    address: string;
    lookup_results: IIPReputationsDataLookupResults;
    geo_info: IIPReputationsDataGeoInfo;
}
interface IIPReputationsDataLookupResults {
    start_time: string;
    detected_by: number;
    sources: IIPReputationsDataLookupResultsSources[];
}
interface IIPReputationsDataLookupResultsSources {
    provider: string;
    assessment: string;
    detect_time: string;
    update_time: string;
    status: number;
}
interface IIPReputationsDataGeoInfo {
    continent: IIPReputationsDataGeoInfoGeneric;
    country: IIPReputationsDataGeoInfoGeneric;
    city: IIPReputationsDataGeoInfoGeneric;
    location: IIPReputationsDataGeoInfoLocation;
    registered_country: IIPReputationsDataGeoInfoGeneric;
    subdivisions: IIPReputationsDataGeoInfoGeneric[];
}
interface IIPReputationsDataGeoInfoGeneric {
    code: string;
    name: string;
}
interface IIPReputationsDataGeoInfoLocation {
    latitude: number;
    longitude: number;
}
export interface IIPReputations {
    success?: boolean;
    error?: IError;
    data?: IIPReputationsData[];
}
interface IURLReputationsDataLookupResultsSource {
    provider: string;
    assessment: string;
    detect_time: string;
    update_time: string;
    status: number;
}
interface IURLReputationsDataLookupResults {
    start_time: string;
    detected_by: number;
    sources: IURLReputationsDataLookupResultsSource[];
}
interface IURLReputationsData {
    address: string;
    lookup_results: IURLReputationsDataLookupResults;
}
export interface IURLReputations {
    success?: boolean;
    error?: IError;
    data?: IURLReputationsData[];
}
interface IDomainReputationsDataLookupResultsSource {
    provider: string;
    assessment: string;
    detect_time: string;
    update_time: string;
    status: number;
}
interface IDomainReputationsDataLookupResults {
    start_time: string;
    detected_by: number;
    sources: IDomainReputationsDataLookupResultsSource[];
}
interface IDomainReputationsData {
    address: string;
    lookup_results: IDomainReputationsDataLookupResults;
}
export interface IDomainReputations {
    success?: boolean;
    error?: IError;
    data?: IDomainReputationsData;
}

export interface IVersion {
    version: string;
}

export interface IEngineDefinition {
    Aegislab: string;
    Agnitum: string;
    Ahnlab: string;
    Antiy: string;
    Avira: string;
    Baidu: string;
    Bitdefender: string;
    ByteHero: string;
    ClamAV: string;
    Cyren: string;
    Emsisoft: string;
    ESET: string;
    Filseclab: string;
    Fortinet: string;
    'F-prot': string;
    'F-Secure': string;
    Hauri: string;
    Huorong: string;
    Ikarus: string;
    Jiangmin: string;
    K7: string;
    McAfee: string;
    Nano: string;
    TACHYON: string;
    Preventon: string;
    Quickheal: string;
    Sophos: string;
    SUPERAntiSpyware: string;
    ThreatTrack: string;
    'Total Defense': string;
    'Trend Micro': string;
    'Trend Micro House Call': string;
    'Vir.IT eXplorer': string;
    'Vir.IT ML': string;
    VirusBlokAda: string;
    'Xvirus Personal Guard': string;
    Zillya: string;
}

export interface IMalwareHashFeed {
    success?: boolean;
    error?: IError;
    data?: IMalwareHashFeedData[];
}

interface IMalwareHashFeedData {
    data_id: string;
    file_type_category: FILE_TYPES;
    file_type_extension: string;
    md5: string;
    sha1: string;
    sha256: string;
    scan_all_result_a: string;
    scan_all_result_i: 1;
    start_time: string;
    detected_by: string[];
    download: string;
    link: string;
}
export interface IFalsePositive {
    success?: boolean;
    error?: IError;
    data?: IFalsePositiveData[];
}

interface IFalsePositiveData {
    data_id: string;
    file_type_category: FILE_TYPES;
    file_type_extension: string;
    md5: string;
    sha1: string;
    sha256: string;
    scan_all_result_a: string;
    scan_all_result_i: 1;
    start_time: string;
    detected_by: string[];
    download: string;
    link: string;
}
export interface IFalsePositiveEngine {
    success?: boolean;
    error?: IError;
    data?: IFalsePositiveEngineData[];
}

interface IFalsePositiveEngineData {
    data_id: string;
    file_type_category: FILE_TYPES;
    file_type_extension: string;
    md5: string;
    sha1: string;
    sha256: string;
    scan_all_result_a: string;
    scan_all_result_i: 1;
    start_time: string;
    detected_by: string[];
    download: string;
    link: string;
}

export interface IDownloadLink {
    status?: boolean;
    error?: IError;
    file_path?: string;
}
export interface IThreatIntelligence {
    from: string;
    to: string;
    top_infected: IThreatIntelligenceInfected[];
}
interface IThreatIntelligenceInfected {
    md5: string;
    sha1: string;
    sha256: string;
    data_id: string;
    total_avs: number;
    total_detected_avs: number;
    file_type_category: FILE_TYPES;
    file_type_extension: string;
    rank: number;
    scan_results: IThreatIntelligenceInfectedScanResult;
}

interface IThreatIntelligenceInfectedScanResult {
    threat_name: string;
}
