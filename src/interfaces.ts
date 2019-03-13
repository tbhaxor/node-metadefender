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
    error: IError;
    data: IApiInfoData;
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
    error: IApiLimitsError;
    data: IApiLimitsData;
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
    size: string;
    type: string;
}

/**
 * @export
 * @interface IHashLookups
 */
export interface IHashLookups {
    data_id: string;
    scan_result_i: number;
    hash: string;
    scan_details: IHashLookupScanResultsScanDetails;
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
    error: IError;
    data: IScanHistoryData;
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
    err: string;
    success: boolean;
    data: IIPReputationData;
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
    error: IError;
    data: IURLReputationData;
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
    error: IError;
    data: IDomainReputationData;
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
    success: boolean;
    error: IError;
    data: IIPReputationsData[];
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
    success: boolean;
    error: IError;
    data: IURLReputationsData[];
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
    success: boolean;
    error: IError;
    data: IDomainReputationsData;
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
    success: boolean;
    error: IError;
    data: IMalwareHashFeedData[];
}

interface IMalwareHashFeedData {
    data_id: string;
    file_type_category: string;
    file_type_extension: string;
    md5: string;
    sha1: string;
    sha256: string;
    scan_all_result_a: string;
    scan_all_result_i: number;
    start_time: string;
    detected_by: string[];
    download: string;
    link: string;
}
export interface IFalsePositive {
    success: boolean;
    error: IError;
    data: IFalsePositiveData[];
}

interface IFalsePositiveData {
    data_id: string;
    file_type_category: string;
    file_type_extension: string;
    md5: string;
    sha1: string;
    sha256: string;
    scan_all_result_a: string;
    scan_all_result_i: number;
    start_time: string;
    detected_by: string[];
    download: string;
    link: string;
}
export interface IFalsePositiveEngine {
    success: boolean;
    error: IError;
    data: IFalsePositiveEngineData[];
}

interface IFalsePositiveEngineData {
    data_id: string;
    file_type_category: string;
    file_type_extension: string;
    md5: string;
    sha1: string;
    sha256: string;
    scan_all_result_a: string;
    scan_all_result_i: number;
    start_time: string;
    detected_by: string[];
    download: string;
    link: string;
}

export interface IDownloadLink {
    status: boolean;
    error: IError;
    file_path: string;
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
    file_type_category: string;
    file_type_extension: string;
    rank: number;
    scan_results: IThreatIntelligenceInfectedScanResult;
}

interface IThreatIntelligenceInfectedScanResult {
    threat_name: string;
}

export interface IFileScan {
    success: boolean;
    error: IError;
    data_id: string;
    status: string;
    in_queue: number;
    queue_priority: string;
}
interface IScanReportSanitized {
    result: string;
    data_id: string;
    reason: string;
}
export interface IScanReport {
    success: boolean;
    error: IError;
    data_id: string;
    status: string;
    in_queue: number;
    last_updated: string;
    scan_result_history_length: number;
    file_id: string;
    sanitized: IScanReportSanitized;
    process_info: IScanReportProcessInfo;
    scan_results: IScanReportScanResults;
    file_info: IScanReportFileInfo;
    share_file: number;
    rest_version: string;
    additional_info: any[];
    votes: IScanReportVotes;
}
interface IScanReportVotes {
    up: number;
    down: number;
}
interface IScanReportFileInfo {
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
interface IScanReportProcessInfo {
    result: string;
    profile: string;
    post_processing: IScanReportProcessInfoPostProcessing;
    file_type_skipped_scan: boolean;
    blocked_reason: string;
}
interface IScanReportProcessInfoPostProcessing {
    copy_move_destination: string;
    converted_to: string;
    converted_destination: string;
    actions_ran: string;
    actions_failed: string;
}
interface IScanReportScanResults {
    scan_details: IScanReportScanResultsScanDetails;
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
interface IScanReportScanResultsScanDetails {
    [key: string]: IScanReportScanResultsScanDetailsAV;
}
interface IScanReportScanResultsScanDetailsAV {
    wait_time: number;
    threat_found: string;
    scan_time: number;
    scan_result_i: number;
    def_time: string;
}

export interface IRescanFile {
    success: boolean;
    error: IError;
    data_id: string;
    status: string;
    in_queue: number;
    queue_priority: string;
}

export interface IRescanFiles {
    data: IRescanFilesData[];
}

interface IRescanFilesData {
    data_id: string;
    status: string | number;
    in_queue: number;
    queue_priority: string;
    file_id: string;
    code: number;
    err: string;
}

export interface IRepositoryScan {
    data_id: string;
    status: string;
    in_queue: string;
    queue_priority: string;
    rest_ip: string;
    success: boolean;
    error: IError;
}

export interface IApplicationInformation {
    success: boolean;
    error: IError;
    data: IApplicationInformationData[];
}
interface IApplicationInformationDataVendorInfos {
    vendor_name: string;
    wa_vendor_id: string;
}
interface IApplicationInformationDataOsInfos {
    os_name: string;
    os_name_norm: string;
    os_type: number;
    arch: string;
    kernel_version: string;
    wa_os_id: string;
    service_pack: string;
}
interface IApplicationInformationDataProductInfos {
    product_name: string;
    product_version: string;
    wa_product_id: string;
    wa_signature_id: string;
}
interface IApplicationInformationData {
    vendor_infos: IApplicationInformationDataVendorInfos[];
    os_infos: IApplicationInformationDataOsInfos[];
    product_infos: IApplicationInformationDataProductInfos[];
    device_identity_stats: IApplicationInformationDataDeviceIdentityStats[];
    file_infos: IApplicationInformationDataFileInfos[];
    product_info_stats: IApplicationInformationDataProductInfoStats[];
    source_ip_stats: IApplicationInformationDataSourceIPStats[];
    file_path_stats: IApplicationInformationDataFilePathStats[];
    loaded_component_stats: IApplicationInformationDataLoadedComponentStats[];
    computer_type_stats: IApplicationInformationDataComputerTypeStats[];
    connection_stats: any[];
    categories: IApplicationInformationDataCategories[];
}
interface IApplicationInformationDataDeviceIdentityStats {
    reported_ts_yyww: string;
    device_identity_count: number;
    device_identity_count_rank_over_sha1: number;
}
interface IApplicationInformationDataFileInfos {
    file_name: string;
    file_name_lower: string;
    file_size: number;
    file_property_version: string;
    file_property_version_norm: string;
    sha1: string;
}
interface IApplicationInformationDataProductInfoStats {
    product_name_norm: string;
    product_name_norm_count: number;
    product_name_norm_rank_over_sha1: number;
    product_version_norm: string;
}
interface IApplicationInformationDataSourceIPStats {
    reported_ts_yyww: string;
    source_ip_count: number;
    source_ip_count_rank_over_sha1: number;
}
interface IApplicationInformationDataFilePathStats {
    file_path: string;
    file_path_count: number;
    file_path_rank_over_sha1: number;
}
interface IApplicationInformationDataLoadedComponentStats {
    loaded_component: string;
    loaded_component_count: number;
}
interface IApplicationInformationDataComputerTypeStats {
    computer_type: string;
    computer_type_count: number;
    computer_type_rank_over_sha1: number;
}
interface IApplicationInformationDataCategories {
    category_name: string;
    wa_category_id: string;
}
export interface IEXIF {
    Megapixels: number;
    ImageSize: string;
    YCbCrSubSampling: string;
    ColorComponents: number;
    BitsPerSample: number;
    EncodingProcess: string;
    ImageHeight: number;
    ImageWidth: number;
    YResolution: number;
    XResolution: number;
    ResolutionUnit: string;
    JFIFVersion: number;
    MIMEType: string;
    FileTypeExtension: string;
    FileType: string;
    FileSize: string;
    FileName: string;
    ExifToolVersion: number;
    success: boolean;
    error: IError;
}
interface IPESectionHeader {
    name: string;
    number_of_relocations: number;
    characteristics: string[];
    virtual_address: string;
    pointer_to_linenumbers: string;
    pointer_to_raw_data: string;
    entropy: number;
    raw_size: number;
    pointer_to_relocations: string;
    virtual_size: number;
    number_of_linenumbers: number;
    md5: string;
}
interface IPEImportedDLL {
    functions: string[];
    name: string;
}
interface IPEVSVersionInfo {
    original_filename: string;
    comments: string;
    product_version: string;
    legal_copyright: string;
    company_name: string;
    internal_name: string;
    product_name: string;
    file_description: string;
}
interface IPEOptionalHeaders {
    subsystem: string;
    subsystem_version: string;
    linker_version: string;
    image_version: string;
    checksum: string;
    os_version: string;
    entry_point: string;
    image_size: number;
    initialized_data_size: number;
    uninitialized_data_size: number;
    code_size: number;
    pe_type: string;
}
interface IPEHeaders {
    characteristics: string[];
    number_of_sections: number;
    pointer_to_symbol_table: string;
    machine_type: string;
    compilation_time: string;
    number_of_symbols: number;
}
interface IPEResourceInfoResourceID {
    resource_langs: string[];
    name: string;
}
interface IPEResourceInfo {
    resource_ids: IPEResourceInfoResourceID[];
    name: string;
}
export interface IPE {
    success: string;
    error: IError;
    section_headers: IPESectionHeader[];
    imported_dlls: IPEImportedDLL[];
    vs_version_info: IPEVSVersionInfo;
    imphash: string;
    optional_headers: IPEOptionalHeaders;
    headers: IPEHeaders;
    pehash: string;
    exported_functions: string[];
    resource_info: IPEResourceInfo[];
}
interface IAndroidSdk {
    minSdkVersion: number;
    targetSdkVersion: number;
}
interface IAndroidGeneric {
    name: string;
}
interface IAndroidApplicationActivitiesIntentFilters {
    actions: any[];
    categories: IAndroidGeneric[];
    data: any[];
}
interface IAndroidApplicationActivities {
    label: string;
    name: string;
    intentFilters: IAndroidApplicationActivitiesIntentFilters[];
    metaData: any[];
}
interface IAndroidApplicationLauncherActivities {
    label: string;
    name: string;
    intentFilters: IAndroidApplicationActivitiesIntentFilters[];
    metaData: any[];
}
interface IAndroidApplication {
    theme: string;
    label: string;
    icon: string;
    debuggable: boolean;
    allowBackup: boolean;
    activities: IAndroidApplicationActivities[];
    activityAliases: any[];
    launcherActivities: IAndroidApplicationLauncherActivities[];
    services: any[];
    receivers: any[];
    providers: any[];
    usesLibraries: any[];
}

export interface IAndroid {
    success: boolean;
    error: IError;
    versionCode: number;
    versionName: string;
    package: string;
    usesPermissions: any[];
    permissions: any[];
    permissionTrees: any[];
    permissionGroups: any[];
    instrumentation: null;
    usesSdk: IAndroidSdk;
    usesConfiguration: null;
    usesFeatures: any[];
    supportsScreens: null;
    compatibleScreens: any[];
    supportsGlTextures: any[];
    application: IAndroidApplication;
}
