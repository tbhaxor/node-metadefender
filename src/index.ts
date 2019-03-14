import ApiInfo from './ApiInfo';
import ApplicationInformation from './ApplicationInformation';
import FileScanning from './FileScan';
import HashLookup from './HashLookup';
import MalwareSampleSharing from './MalwareSampleSharing';
import ReputationService from './ReputationService';
import Status from './Status';
import ThreatIntelligenceFeed from './ThreatIntelligence';

// exporting modules
/// <reference types="../dist/ApiInfo" />
export { ApiInfo };
/// <reference types="../dist/HashLookup" />
export { HashLookup };
/// <reference types="../dist/ReputationService" />
export { ReputationService };
/// <reference types="../dist/Status" />
export { Status };
/// <reference types="../dist/MalwareSampleSharing" />
export { MalwareSampleSharing };
/// <reference types="../dist/ThreatIntelligence" />
export { ThreatIntelligenceFeed };
/// <reference types="../dist/FileScan" />
export { FileScanning };
/// <reference types="../dist/ApplicationInformation" />
export { ApplicationInformation };
export enum SCAN_RESULT_CODE {
    NO_THREATS_FOUND,
    INFECTED_KNOWN,
    SUSPICIOUS,
    FAILED_TO_SCAN,
    CLEANED_DELETED,
    UNKNOWN,
    QUARANTINED,
    SKIPPED_CLEAN,
    SKIPPED_INFECTED,
    EXCEEDED_ARCHIVE_DEPTH,
    NOT_SCANNED_NO_SCAN_RESULTS,
    ABORTED,
    ENCRYPTED,
    EXCEEDED_ARCHIVE_SIZE,
    EXCEEDED_ARCHIVE_FILE_NUMBER,
    PASSWORD_PROTECTED_DOCUMENT,
    EXCEEDED_ARCHIVE_TIMEOUT,
    MISMATCH,
    POTENTIALLY_VULNERABLE_FILE,
    CANCELED,
    IN_PROGRESS
}
export enum FILE_TYPES {
    'EXECUTABLES' = 'E',
    'DOCUMENTS' = 'D',
    'ARCHIVES' = 'A',
    'GRAPHIC_FILES' = 'G',
    'TEXT' = 'T',
    'PDF_FILES' = 'P',
    'AUDIO_VIDEO_FORMAT' = 'M',
    'ANDROID_APK_FILES' = 'N'
}
