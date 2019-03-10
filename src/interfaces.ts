interface IApiInfoError {
    code: number;
    messages: string[];
}
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

export interface IApiInfo {
    success: boolean;
    error?: IApiInfoError;
    data?: IApiInfoData;
}

interface IApiLimitsError {
    code: number;
    messages: string[];
}
interface IApiLimitsData {
    reputation_api: string;
    prevention_api: string;
    feed_api: number;
    download_file: number;
}
export interface IApiLimits {
    success: boolean;
    error?: IApiLimitsError;
    data?: IApiLimitsData;
}
