export enum ErrorCode {
    HT_AN_PARAM_ERROR,
    HT_AN_EXTERNAL,
}

export enum ErrorMessage {
    PARSING_ERROR = "Error while parsing the string",
    INVALID_OBJECT = "Invalid/undefined object passed",
    INSUFFICIENT_PARAMETERS = "Insufficient parameters passed"
}

export class HT_Error {
    constructor(
        public errorCode: ErrorCode,
        public message: ErrorMessage){
    }
}